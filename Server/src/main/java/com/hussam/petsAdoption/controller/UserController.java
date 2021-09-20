package com.hussam.petsAdoption.controller;

import com.hussam.petsAdoption.entity.User;
import com.hussam.petsAdoption.entity.UserDetails;
import com.hussam.petsAdoption.security.userService.CurrentUser;
import com.hussam.petsAdoption.security.userService.UserDetailsImp;
import com.hussam.petsAdoption.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/userdetails")
    public ResponseEntity<?> updateUserDetails(@RequestBody UserDetails userDetails, @CurrentUser UserDetailsImp currentUser){
        User user = userService.addUserDetails(userDetails, currentUser);

        return new ResponseEntity<>( user, HttpStatus.CREATED);
    }

    @GetMapping("/profile")
    public ResponseEntity<?> getUserProfile(@CurrentUser UserDetailsImp currentUser){
        User user = userService.getUserProfile(currentUser);

        return new ResponseEntity<>(user, HttpStatus.OK);
    }
}
