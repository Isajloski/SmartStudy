package mk.ukim.finki.smartstudy.repository;

import mk.ukim.finki.smartstudy.model.ERole;
import mk.ukim.finki.smartstudy.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
