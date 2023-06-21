package iam.couture.projet.backend_atelier_couture.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.time.LocalDate;

@SuppressWarnings("ALL")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Personne {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="firstName", length= 25, nullable = false)
    private String firstName;
    @Column(name="lastName", length= 25, nullable = false)
    private String LastName;
    @Column(name="adress", length= 100, nullable = false)
    private String Adress;
    @Column(name="birthday", length= 25, nullable = false)
    private LocalDate Birthday;
    @Column(name="phone", length= 25, nullable = false)
    private String phone;
}
