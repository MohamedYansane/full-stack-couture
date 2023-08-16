package iam.couture.projet.backend_atelier_couture.repository;

import iam.couture.projet.backend_atelier_couture.entity.ERole;
import iam.couture.projet.backend_atelier_couture.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;
@SuppressWarnings("ALL")
@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
