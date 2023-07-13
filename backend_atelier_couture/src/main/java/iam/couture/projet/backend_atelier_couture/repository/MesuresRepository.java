package iam.couture.projet.backend_atelier_couture.repository;

import iam.couture.projet.backend_atelier_couture.entity.Mesures;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@SuppressWarnings("ALL")
@Repository
public interface MesuresRepository extends JpaRepository<Mesures, Long> {
}
