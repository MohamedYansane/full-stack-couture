package iam.couture.projet.backend_atelier_couture.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

import javax.persistence.*;

@SuppressWarnings("ALL")
@Data
@Entity
@Table(name = "couturier")
public class Couturier{
    @Id
   private Long id;

    private String nom;


}