package com.hussam.petsAdoption.dto.response;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Data
@Getter
@Setter
public class LoginResponse {
    private Long id;
    private String accessToken;
    private String refreshToken;
    private String username;
    private String type = "Bearer";
    private String email;
    private List<String> roles;
}
