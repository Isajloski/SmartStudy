package mk.ukim.finki.smartstudy.repository;

import mk.ukim.finki.smartstudy.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername (String username);
    Boolean existsByUsername (String username);
    Boolean existsByEmail (String email);
}
