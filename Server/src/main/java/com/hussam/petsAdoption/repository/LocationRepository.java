package com.hussam.petsAdoption.repository;

import com.hussam.petsAdoption.entity.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long> {

    public Location findByCityAndState(String city, String state);
}
