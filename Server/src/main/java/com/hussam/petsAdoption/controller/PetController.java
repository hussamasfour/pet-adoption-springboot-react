package com.hussam.petsAdoption.controller;

import com.hussam.petsAdoption.dto.request.NewPetRequest;
import com.hussam.petsAdoption.entity.Pet;
import com.hussam.petsAdoption.service.PetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PetController {

    @Autowired
    private PetService petService;


    @PostMapping("/pets")
    public ResponseEntity<?> addPet(@RequestBody NewPetRequest newPetRequest){
        petService.addPet(newPetRequest);
        return new ResponseEntity<>("New Pets is been added", HttpStatus.CREATED);
    }

    @GetMapping("/pets")
    public ResponseEntity<?> getPetsByLocation(@RequestParam("city") String city, @RequestParam("state") String state, @RequestParam("animal") String animal){
        List<Pet> pets = petService.getPetsByLocationAndCategory(city,state, animal);

        return new ResponseEntity<>(pets, HttpStatus.OK);
    }
}
