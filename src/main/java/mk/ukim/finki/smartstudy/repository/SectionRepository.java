package mk.ukim.finki.smartstudy.repository;

import mk.ukim.finki.smartstudy.model.Section;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SectionRepository extends JpaRepository<Section, Long> {
}
