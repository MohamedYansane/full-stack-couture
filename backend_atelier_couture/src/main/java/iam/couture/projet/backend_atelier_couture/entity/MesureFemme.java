package iam.couture.projet.backend_atelier_couture.entity;

import jakarta.persistence.*;
import lombok.Data;


@SuppressWarnings("ALL")
@Entity
@Data

public class MesureFemme extends Mesures{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "dessousPoids",nullable = false)
    private Float dessousPoids;
    @Column(name = "cretesIliaques",nullable = false)
    private Float creteIliaques;
    @Column(name = "ldos",nullable = false)
    private Float ldos;
}
