package com.hussam.petsAdoption.dto.request;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Data
@Getter
@Setter
public class LoginRequest {
    @NotBlank(message = "You must enter a username")
    private String username;
    @NotBlank(message = "you must enter a password")
    private String password;
}
