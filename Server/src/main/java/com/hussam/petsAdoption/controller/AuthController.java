package com.hussam.petsAdoption.controller;

import com.hussam.petsAdoption.dto.request.LoginRequest;
import com.hussam.petsAdoption.dto.request.RefreshTokenRequest;
import com.hussam.petsAdoption.dto.request.SignUpRequest;
import com.hussam.petsAdoption.dto.response.LoginResponse;
import com.hussam.petsAdoption.dto.response.RefreshTokenResponse;
import com.hussam.petsAdoption.dto.response.SignUpResponse;
import com.hussam.petsAdoption.entity.RefreshToken;
import com.hussam.petsAdoption.exception.TokenRefreshException;
import com.hussam.petsAdoption.security.jwt.JwtUtils;
import com.hussam.petsAdoption.service.RefreshTokenService;
import com.hussam.petsAdoption.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RestController
@RequestMapping("/api")
@CrossOrigin
public class AuthController {
    @Autowired
    private UserService userService;

    @Autowired
    JwtUtils jwtUtils;

    @Autowired
    private RefreshTokenService refreshTokenService;

    @PostMapping("/signup")
    ResponseEntity<SignUpResponse>  register(@Valid @RequestBody SignUpRequest signUpRequest) throws Exception {
        userService.signUp(signUpRequest);

        return ResponseEntity.ok( new SignUpResponse("Successfully created"));
    }

    @PostMapping("/login")
    ResponseEntity<LoginResponse> login(@Valid @RequestBody LoginRequest loginRequest){
        LoginResponse jwtResponse =  userService.signIn(loginRequest);

        return ResponseEntity.ok(jwtResponse);
    }

    @PostMapping("/refreshtoken")
    public ResponseEntity<?> refreshtoken(@Valid @RequestBody RefreshTokenRequest request) {
        String requestRefreshToken = request.getRefreshToken();

        return refreshTokenService.findByToken(requestRefreshToken)
                .map(refreshTokenService::verifyExpiration)
                .map(RefreshToken::getUser)
                .map(user -> {
                    String token = jwtUtils.generateTokenFromUsername(user.getUsername());
                    return ResponseEntity.ok(new RefreshTokenResponse(token, requestRefreshToken));
                })
                .orElseThrow(() -> new TokenRefreshException(requestRefreshToken,
                        "Refresh token is not in database!"));
    }
}
