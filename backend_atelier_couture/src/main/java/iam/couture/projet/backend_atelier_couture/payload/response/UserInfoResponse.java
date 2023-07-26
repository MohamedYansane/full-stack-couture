package iam.couture.projet.backend_atelier_couture.payload.response;
import lombok.Data;

import java.util.List;
@SuppressWarnings("ALL")
@Data
public class UserInfoResponse {
    private Long id;
    private String username;
    private String email;
    private String token;
    private String type="Bearer";
    private List<String> roles;

    public UserInfoResponse(String token,Long id, String username, String email, List<String> roles) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.token = token;
        this.roles = roles;
    }



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }


    public List<String> getRoles() {
        return roles;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }
}
