package iam.couture.projet.backend_atelier_couture.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "mesures")
public class Mesures {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Long id;
    protected Float tete;
    protected Float cou;
    protected Float lbras;
    protected Float coude;
    protected Float genou;
    protected Float lcorps;
    protected Float cuisse;
    protected Float hanches;
    protected Float cheville;
    protected Float biceps;
    protected Float avantBras;
    protected Float poignet;
    protected Float entreJambes;
    protected Float epaules;
    protected Float coutureExt;
    protected Float htotale;
    protected  Float poitrine;
    @ManyToOne
    protected Client client;

}
