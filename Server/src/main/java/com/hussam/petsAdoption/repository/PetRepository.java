package com.hussam.petsAdoption.repository;

import com.hussam.petsAdoption.entity.Category;
import com.hussam.petsAdoption.entity.Location;
import com.hussam.petsAdoption.entity.Pet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PetRepository extends JpaRepository<Pet, Long> {

    public List<Pet> findPetsByLocationAndCategory(Location location, Category category);
    public List<Pet> findPetsByCategory(Category category);
 }
