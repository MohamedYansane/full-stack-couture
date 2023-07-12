package iam.couture.projet.backend_atelier_couture.repository;

import iam.couture.projet.backend_atelier_couture.entity.Mesure;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@SuppressWarnings("ALL")
@Repository
public interface MesureRepository extends JpaRepository<Mesure, Long> {
}
