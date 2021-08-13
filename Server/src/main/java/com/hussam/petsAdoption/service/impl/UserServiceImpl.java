package com.hussam.petsAdoption.service.impl;

import com.hussam.petsAdoption.dto.request.LoginRequest;
import com.hussam.petsAdoption.dto.request.SignUpRequest;
import com.hussam.petsAdoption.dto.response.LoginResponse;
import com.hussam.petsAdoption.entity.RefreshToken;
import com.hussam.petsAdoption.entity.Role;
import com.hussam.petsAdoption.entity.RoleType;
import com.hussam.petsAdoption.entity.User;
import com.hussam.petsAdoption.exception.InvalidArgumentException;
import com.hussam.petsAdoption.exception.UserAlreadyExistException;
import com.hussam.petsAdoption.repository.RoleRepository;
import com.hussam.petsAdoption.repository.UserRepository;
import com.hussam.petsAdoption.security.jwt.JwtUtils;
import com.hussam.petsAdoption.security.userService.UserDetailsImp;
import com.hussam.petsAdoption.service.RefreshTokenService;
import com.hussam.petsAdoption.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private RefreshTokenService refreshTokenService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtils jwtUtils;

    @Override
    public User signUp(SignUpRequest signUpRequest)  {
        // checking if email is already exists
        if(userRepository.existsByEmail(signUpRequest.getEmail())){
            throw new UserAlreadyExistException("Failed!! email is already in use!!");
        }

        if(userRepository.existsByUsername(signUpRequest.getUsername())){
            throw new UserAlreadyExistException("Failed!! Username is already in use!!");
        }

        Set<Role> roles = new HashSet<>();
        Role role;
        if("user".equalsIgnoreCase(signUpRequest.getRoleType())){
             role = roleRepository.findByRoleType(RoleType.ROLE_USER);
        }else if ("admin".equalsIgnoreCase(signUpRequest.getRoleType())) {
            role = roleRepository.findByRoleType(RoleType.ROLE_ADMIN);
        }else {
            role = roleRepository.findByRoleType(RoleType.ROLE_USER);
        }
        roles.add(role);

        // create new user instance
        User user = new User();

        user.setEmail(signUpRequest.getEmail());
        user.setUsername(signUpRequest.getUsername());
        user.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));
        user.setListRole(roles);

        //saving the new user to the database
        return userRepository.save(user);
    }

    @Override
    public LoginResponse signIn(LoginRequest loginRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

            SecurityContextHolder.getContext().setAuthentication(authentication);

            UserDetailsImp userDetails = (UserDetailsImp) authentication.getPrincipal();

            String jwt = jwtUtils.generateJwtToken(userDetails);

//        RefreshToken refreshToken = refreshTokenUtil.createRefreshToken(userDetails.getId());

            List<String> roles = userDetails.getAuthorities().stream().map(item -> item.getAuthority())
                    .collect(Collectors.toList());
            RefreshToken refreshToken= refreshTokenService.createRefreshToken(userDetails.getId());

            LoginResponse loginResponse = new LoginResponse();

            loginResponse.setEmail(userDetails.getEmail());
            loginResponse.setUsername(userDetails.getUsername());
            loginResponse.setAccessToken(jwt);
            loginResponse.setId(userDetails.getId());
            loginResponse.setRefreshToken(refreshToken.getToken());
            loginResponse.setRoles(roles);



            return loginResponse;

        }catch (BadCredentialsException e){
            throw new InvalidArgumentException("Username/Password is not correct");
        }
    }

    @Override
    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }
}
