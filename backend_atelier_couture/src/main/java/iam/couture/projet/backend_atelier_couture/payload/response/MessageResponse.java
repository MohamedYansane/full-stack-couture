package iam.couture.projet.backend_atelier_couture.payload.response;

import lombok.Data;

@SuppressWarnings("ALL")

public class MessageResponse {
    private String message;
    public MessageResponse(String message) {
        this.message = message;
    }
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
