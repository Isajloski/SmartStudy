package mk.ukim.finki.smartstudy.repository;

import mk.ukim.finki.smartstudy.model.Section;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SectionRepository extends JpaRepository<Section, Long> {
    List<Section> findSectionsByCourseId(Long id);
}
