package com.hussam.petsAdoption.service.impl;

import com.hussam.petsAdoption.entity.Pet;
import com.hussam.petsAdoption.entity.Reservation;
import com.hussam.petsAdoption.entity.User;
import com.hussam.petsAdoption.repository.PetRepository;
import com.hussam.petsAdoption.repository.ReservationRepository;
import com.hussam.petsAdoption.repository.UserRepository;
import com.hussam.petsAdoption.security.userService.UserDetailsImp;
import com.hussam.petsAdoption.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReservationServiceImpl implements ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PetRepository petRepository;
    @Override
    public Reservation adoptPetByUser(Long id, UserDetailsImp currentUser) {
        User user = userRepository.findByUsername(currentUser.getUsername());

        Pet selectedPet = petRepository.getById(id);

        Reservation reservation= new Reservation();
        reservation.setUser(user);
        reservation.setPet(selectedPet);

        return reservationRepository.save(reservation);
    }
}
