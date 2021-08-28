package com.hussam.petsAdoption.service.impl;

import com.hussam.petsAdoption.dto.request.NewPetRequest;
import com.hussam.petsAdoption.entity.Category;
import com.hussam.petsAdoption.entity.Gender;
import com.hussam.petsAdoption.entity.Location;
import com.hussam.petsAdoption.entity.Pet;
import com.hussam.petsAdoption.exception.NotFoundException;
import com.hussam.petsAdoption.repository.CategoryRepository;
import com.hussam.petsAdoption.repository.LocationRepository;
import com.hussam.petsAdoption.repository.PetRepository;
import com.hussam.petsAdoption.service.PetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PetServiceImpl implements PetService {

    @Autowired
    private PetRepository petRepository;

    @Autowired
    private LocationRepository locationRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public List<Pet> getAllPets() {
        return petRepository.findAll();
    }

    @Override
    public void addPet(NewPetRequest newPetRequest) {
        Location location = locationRepository.findByCityAndState(newPetRequest.getCity(), newPetRequest.getState());
        if(location == null){
            throw new NotFoundException("Please choose a correct location");
        }

        Category category = categoryRepository.findByName(newPetRequest.getCategory());

        if(category == null){
            throw new NotFoundException("Please choose a correct category");
        }

        Pet pet = new Pet();

        pet.setName(newPetRequest.getName());
        pet.setColor(newPetRequest.getColor());
        pet.setWeight(newPetRequest.getWeight());
        pet.setDateOfBirth(newPetRequest.getDateOfBirth());
        if("male".equalsIgnoreCase(newPetRequest.getGender())){
            pet.setGender(Gender.MALE);
        }else{
            pet.setGender(Gender.FEMALE);
        }
        pet.setLocation(location);
        pet.setCategory(category);

        petRepository.save(pet);

       }

    @Override
    public List<Pet> getPetsByLocationAndCategory(String city, String state, String animal) {
        Location location = locationRepository.findByCityAndState(city, state);

        if(location == null){
            throw new NotFoundException("Please choose a correct location");
        }
        Category category = categoryRepository.findByName(animal);

        if(category == null){
            throw new NotFoundException("Please choose a correct category");
        }
        return petRepository.findPetsByLocationAndCategory(location, category);
    }

    @Override
    public List<Pet> getPetsByCategory(String animal) {
        Category category = categoryRepository.findByName(animal);

        if(category == null){
            throw new NotFoundException("Please choose a correct category");
        }

        return petRepository.findPetsByCategory(category);
    }
}
