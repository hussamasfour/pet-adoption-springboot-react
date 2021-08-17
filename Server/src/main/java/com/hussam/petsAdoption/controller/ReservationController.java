package com.hussam.petsAdoption.controller;

import com.hussam.petsAdoption.entity.Reservation;
import com.hussam.petsAdoption.security.userService.CurrentUser;
import com.hussam.petsAdoption.security.userService.UserDetailsImp;
import com.hussam.petsAdoption.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @PostMapping("/adopt")
    public ResponseEntity<?> adoptPet(@RequestParam("petId") Long id, @CurrentUser UserDetailsImp currentUser){
       Reservation reservation = reservationService.adoptPetByUser(id, currentUser);

        return new ResponseEntity<>(reservation, HttpStatus.CREATED);
    }
}
