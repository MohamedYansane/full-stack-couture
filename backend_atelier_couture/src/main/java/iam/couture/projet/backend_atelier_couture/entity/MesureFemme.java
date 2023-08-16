package iam.couture.projet.backend_atelier_couture.entity;

import jakarta.persistence.*;
import lombok.Data;


@SuppressWarnings("ALL")
@Entity
@Data
@Table(name = "Mesures")
public class MesureFemme extends Mesures{

    @Column(name = "dessous_poids")
    private Float dessousPoids;
    @Column(name = "cretes_iliaques")
    private Float creteIliaques;
    @Column(name = "ldos",nullable = false )
    private Float ldos;
}
