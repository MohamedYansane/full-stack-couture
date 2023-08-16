package iam.couture.projet.backend_atelier_couture;

import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SuppressWarnings("ALL")
@SpringBootApplication

public class BackendAtelierCoutureApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendAtelierCoutureApplication.class, args);
		//String secretKey = generateSecureSecretKey();

		// Print the generated secret key
		//System.out.println("Cle generée: " + secretKey);
	}
	/*public static String generateSecureSecretKey() {
		// Generate a random 256-bit key
		byte[] keyBytes = Keys.secretKeyFor(SignatureAlgorithm.HS256).getEncoded();

		// Encode the key bytes into Base64 to get a human-readable secret key
		return java.util.Base64.getEncoder().encodeToString(keyBytes);
	}*/
}
