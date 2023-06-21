package iam.couture.projet.backend_atelier_couture.entity;


import jakarta.persistence.*;
import lombok.Data;

@SuppressWarnings("ALL")
@Entity
@Data

@Table(name="client")

public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="nom", length= 25, nullable = false)
    private String nom;
    @Column(name="prenom", nullable = false, length=25)
    private String prenom;
    @Column(name="phone", nullable = false, length=25)
    private String phone;
    @Column(name="adresse", nullable = false, length=55)
    private String adresse;
    @Column(name="email",unique = true, nullable = false, length=55)
    private String email;
    @Column(name="cni", nullable = false, length=25)
    private String cni;
    @Column(name="sexe", nullable = false, length=10)
    private String sexe;
    @Column(name="status", nullable = false, length=10)
    private String status;


}
