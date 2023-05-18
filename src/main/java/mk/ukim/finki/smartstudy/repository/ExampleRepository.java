package mk.ukim.finki.smartstudy.repository;

import mk.ukim.finki.smartstudy.model.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExampleRepository extends JpaRepository<Example, Long> {

}
