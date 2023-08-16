package iam.couture.projet.backend_atelier_couture.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@SuppressWarnings("ALL")
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class RessourceNotFoundException extends RuntimeException{
    //runtime exception implement
    private static final Long serialVersionUID = 1L;
    public RessourceNotFoundException(String message){
        super(message);
    }
}
