package mk.ukim.finki.smartstudy.repository;

import mk.ukim.finki.smartstudy.model.Material;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MaterialRepository extends JpaRepository<Material, Long> {
}
