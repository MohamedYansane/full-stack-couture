package iam.couture.projet.backend_atelier_couture.entity;
import jakarta.persistence.*;
import lombok.Data;

@SuppressWarnings("ALL")
@Entity
@Table(name = "roles")
@Data
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private ERole name;
}