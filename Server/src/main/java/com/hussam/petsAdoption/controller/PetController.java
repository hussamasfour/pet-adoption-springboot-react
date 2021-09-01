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
@RequestMapping("/api/pet")
@CrossOrigin
public class PetController {

    @Autowired
    private PetService petService;

    @PostMapping("/add")
    public ResponseEntity<?> addPet(@RequestBody NewPetRequest newPetRequest) {
        petService.addPet(newPetRequest);
        return new ResponseEntity<>("New Pets is been added", HttpStatus.CREATED);
    }

    @GetMapping("/location")
    public ResponseEntity<?> getPetsByLocation(@RequestParam("city") String city, @RequestParam("state") String state, @RequestParam("animal") String animal) {
        List<Pet> pets = petService.getPetsByLocationAndCategory(city, state, animal);
        return new ResponseEntity<>(pets, HttpStatus.OK);
    }

    @GetMapping("/category")
    public ResponseEntity<?> getPetsByCategory(@RequestParam("animal") String animal) {
        List<Pet> pets = petService.getPetsByCategory(animal);

        return new ResponseEntity<>(pets, HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllPets() {
        List<Pet> pets = petService.getAllPets();
        return new ResponseEntity<>(pets, HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<?> searchPets(@RequestParam("animal") String animal, @RequestParam("city") String city, @RequestParam("age") String age) {
        List<Pet> pets = petService.searchPets(animal, city, age);
        return new ResponseEntity<>(pets, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getPetById(@PathVariable("id") Long id){
        Pet pet = petService.getPetById(id);
        return new ResponseEntity<>(pet, HttpStatus.OK);
    }
}
