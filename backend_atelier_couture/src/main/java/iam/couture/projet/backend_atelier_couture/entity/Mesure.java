package iam.couture.projet.backend_atelier_couture.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@SuppressWarnings("ALL")
@Entity
@Data
@Table(name="mesure")


public class Mesure {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Long idMesure;
    @Column(name = "tete",nullable = false, length= 5)
    //private tete
    protected Float tete;
    @Column(name = "epaule",nullable = false, length= 5)
    protected Float epaule;
    @Column(name = "cou",nullable = false, length= 5)
    protected Float cou;
    @Column(name = "lBras",nullable = false, length= 5)
    private Float lBras;
    @Column(name = "poitrine",nullable = false, length= 5)
    protected  Float poitrine;
    @Column(name = "hanches",nullable = false, length= 5)
    protected Float hanches;
    @Column(name = "lCorps",nullable = false, length= 5)

    protected Float lCorps;
    @Column(name = "cuisse",nullable = false, length= 5)

    protected  Float cuisse;
    @Column(name = "genou",nullable = false, length= 5)

    protected Float genou;
    @Column(name = "cheville",nullable = false, length= 5)
    protected  Float cheville;
    @Column(name = "biceps",nullable = false, length= 5)
    protected  Float biceps;
    @Column(name = "coude",nullable = false, length= 5)
    protected  Float coude;
    @Column(name = "avantBras",nullable = false, length= 5)
    protected  Float avantBras;
    @Column(name = "poignetCode",nullable = false, length= 5)
    protected Float poignetCode;
    @Column(name = "entreJambe",nullable = false, length= 5)
    protected Float entreJambe;
    @Column(name = "coutureExt",nullable = false, length= 5)
    protected Float coutureExt;
    @Column(name = "hTotale",nullable = false, length= 5)
    protected Float hTotale;
    @OneToOne(cascade = CascadeType.ALL)
    protected Client client;


}
