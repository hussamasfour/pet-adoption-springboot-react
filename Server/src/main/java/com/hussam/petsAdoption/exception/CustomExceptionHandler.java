package com.hussam.petsAdoption.exception;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@ControllerAdvice
public class CustomExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(Exception.class)
    public final ResponseEntity<ExceptionResponse> handleAllException(Exception ex, WebRequest webRequest){
        List<String> details =  new ArrayList<>();
        details.add(ex.getLocalizedMessage());
        ExceptionResponse exceptionResponse = new ExceptionResponse(new Date(),"Internal Server Error" ,details, webRequest.getDescription(false));

        return new ResponseEntity(exceptionResponse, new HttpHeaders(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
    @ExceptionHandler(UserAlreadyExistException.class)
    public final ResponseEntity<ExceptionResponse> handleUserAlreadyExistExceptions(
            UserAlreadyExistException ex,  WebRequest webRequest) {
        List<String> details = new ArrayList<>();
        details.add( ex.getLocalizedMessage());
        ExceptionResponse exceptionResponse=  new ExceptionResponse(new Date(), "Validation Failed", details,webRequest.getDescription(false) );
        return new ResponseEntity(exceptionResponse, new HttpHeaders(), HttpStatus.BAD_REQUEST);
    }
    @ExceptionHandler(TokenRefreshException.class)
    public final ResponseEntity<ExceptionResponse> handleTokenRefreshExceptions(
            TokenRefreshException ex,  WebRequest webRequest) {
        List<String> details = new ArrayList<>();
        details.add( ex.getLocalizedMessage());
        ExceptionResponse exceptionResponse=  new ExceptionResponse(new Date(), "Validation Failed", details,webRequest.getDescription(false) );
        return new ResponseEntity(exceptionResponse, new HttpHeaders(), HttpStatus.FORBIDDEN);
    }
}
