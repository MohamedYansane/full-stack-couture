package iam.couture.projet.backend_atelier_couture.payload.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@SuppressWarnings("ALL")
@Data
public class LoginRequest {
    @NotBlank
    private String username;

    @NotBlank
    private String password;
}
