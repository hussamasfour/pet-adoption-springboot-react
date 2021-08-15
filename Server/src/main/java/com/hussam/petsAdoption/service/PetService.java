package com.hussam.petsAdoption.service;

import com.hussam.petsAdoption.dto.request.NewPetRequest;
import com.hussam.petsAdoption.entity.Pet;

import java.util.List;

public interface PetService {

    public List<Pet> getAllPets();

    void addPet(NewPetRequest newPetRequest);

    List<Pet> getPetsByLocationAndCategory(String city, String state, String animal);

    List<Pet> getPetsByCategory(String animal);
}
