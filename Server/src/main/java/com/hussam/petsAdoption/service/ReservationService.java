package com.hussam.petsAdoption.service;

import com.hussam.petsAdoption.entity.Reservation;
import com.hussam.petsAdoption.security.userService.UserDetailsImp;

public interface ReservationService {
    Reservation adoptPetByUser(Long id, UserDetailsImp currentUser);
}
