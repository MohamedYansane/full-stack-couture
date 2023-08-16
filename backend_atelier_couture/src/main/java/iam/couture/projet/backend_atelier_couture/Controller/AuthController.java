package iam.couture.projet.backend_atelier_couture.Controller;

import iam.couture.projet.backend_atelier_couture.entity.ERole;
import iam.couture.projet.backend_atelier_couture.entity.Role;
import iam.couture.projet.backend_atelier_couture.entity.User;
import iam.couture.projet.backend_atelier_couture.payload.request.LoginRequest;
import iam.couture.projet.backend_atelier_couture.payload.request.SignupRequest;
import iam.couture.projet.backend_atelier_couture.payload.response.MessageResponse;
import iam.couture.projet.backend_atelier_couture.payload.response.UserInfoResponse;
import iam.couture.projet.backend_atelier_couture.repository.RoleRepository;
import iam.couture.projet.backend_atelier_couture.repository.UserRepository;
import iam.couture.projet.backend_atelier_couture.security.jwt.JwtUtils;
import iam.couture.projet.backend_atelier_couture.security.services.UserDetailsImpl;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@SuppressWarnings("ALL")
/*@CrossOrigin(origins = "http://localhost:8081", maxAge = 3600,
 allowCredentials="true"): This configuration allows requests
 from the specific origin http://localhost:8081 to access the server's resources.
 It also allows credentials (cookies, HTTP authentication) to be sent along with the request.
 The maxAge of 3600 seconds (1 hour) indicates that the browser should cache the CORS response for one hour.

@CrossOrigin(origins = "*", maxAge = 3600): This configuration allows requests from any origin to access the server's
resources. The wildcard * means any origin is allowed. The maxAge of 3600 seconds (1 hour) indicates that the browser
 should cache the CORS response for one hour.*/
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    UserRepository userRepository;
    @Autowired
    RoleRepository roleRepository;
    @Autowired
    PasswordEncoder encoder;
    @Autowired
    JwtUtils jwtUtils;
    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                loginRequest.getUsername(), loginRequest.getPassword()));
        String jwt = jwtUtils.generateJwtToken(authentication);
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities()
                .stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        // Set the JWT token in the response body instead of the HTTP header
        return ResponseEntity.ok(new UserInfoResponse(jwt, userDetails.getId(), userDetails.getUsername(), userDetails.getEmail(), roles));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        if
        (userRepository.existsByUsername(signUpRequest.getUsername()))
        {
            return ResponseEntity.badRequest().body(new
                    MessageResponse("Error: Username is already taken!"));
        }
        if
        (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity.badRequest().body(new
                    MessageResponse("Error: Email is already in use!"));
        }
        // Create new user's account
        User user = new User(signUpRequest.getUsername(),
                signUpRequest.getEmail(),
                encoder.encode(signUpRequest.getPassword()));
        Set<String> strRoles = signUpRequest.getRole();
        Set<Role> roles = new HashSet<>();
        if (strRoles == null) {
            Role userRole =
                    roleRepository.findByName(ERole.ROLE_USER)
                            .orElseThrow(() -> new
                                    RuntimeException("Error: Role is not found."));
            roles.add(userRole);
        } else {
            strRoles.forEach(role -> {
                switch (role) {
                    case "admin":
                        Role adminRole =
                                roleRepository.findByName(ERole.ROLE_ADMIN)
                                        .orElseThrow(() -> new
                                                RuntimeException("Error: Role is not found."));
                        roles.add(adminRole);
                        break;
                    case "mod":
                        Role modRole =
                                roleRepository.findByName(ERole.ROLE_MODERATOR)
                                        .orElseThrow(() -> new RuntimeException("Error: Role is not found."));roles.add(modRole);
                        break;
                    default:
                        Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                                        .orElseThrow(() -> new
                                                RuntimeException("Error: Role is not found."));
                        roles.add(userRole);
                }
            });
        }
        user.setRoles(roles);
        userRepository.save(user);
        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }


    @PostMapping("/signout")
    public ResponseEntity<?> logoutUser() {
        ResponseCookie cookie = jwtUtils.getCleanJwtCookie();
        return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, cookie.toString()).body(new MessageResponse("You've been signed out!"));
    }
}