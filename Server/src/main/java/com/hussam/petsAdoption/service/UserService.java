package com.hussam.petsAdoption.service;

import com.hussam.petsAdoption.dto.request.LoginRequest;
import com.hussam.petsAdoption.dto.request.SignUpRequest;
import com.hussam.petsAdoption.dto.response.LoginResponse;
import com.hussam.petsAdoption.entity.User;
import com.hussam.petsAdoption.entity.UserDetails;
import com.hussam.petsAdoption.security.userService.UserDetailsImp;

public interface UserService {

    public User signUp(SignUpRequest signUpRequest) throws Exception;
    public LoginResponse signIn(LoginRequest loginRequest);
    public User getUserByUsername(String username);

    User addUserDetails(UserDetails userDetails, UserDetailsImp currentUser);
}
