package iam.couture.projet.backend_atelier_couture.entity;

import jakarta.persistence.*;
import lombok.Data;

@SuppressWarnings("ALL")
@Entity
@Data
@Table(name = "mesureF")

public class MesureFemme extends Mesure{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "dessousPoids",nullable = false, length= 5)
    private Float dessousPoids;
    @Column(name = "cretesIliaques",nullable = false, length= 5)
    private Float creteIliaques;
    @Column(name = "ldos",nullable = false, length= 5)
    private Float ldos;
}
