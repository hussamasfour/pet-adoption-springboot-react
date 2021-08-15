package com.hussam.petsAdoption.dto.request;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Data
@Getter
@Setter
public class NewPetRequest {

    private String name;
    private String color;
    private String category;
    private Date dateOfBirth;
    private String city;
    private String state;
    private int weight;
    private String gender;
}
