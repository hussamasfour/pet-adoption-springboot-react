package com.hussam.petsAdoption.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@AllArgsConstructor
@Getter
@Setter
public class ExceptionResponse {
    private Date timeStamp;
    private String title;
    private List<String> message;
    private String path;
}
