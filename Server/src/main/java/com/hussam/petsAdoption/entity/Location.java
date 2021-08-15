package com.hussam.petsAdoption.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    @JsonIgnore
    private List<Pet> pets;
}
