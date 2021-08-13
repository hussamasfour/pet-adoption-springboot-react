package com.hussam.petsAdoption.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String city;
    private String state;
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "location")
    private List<Pet> pets;
}
