package mk.ukim.finki.smartstudy.repository;

import mk.ukim.finki.smartstudy.model.Homework;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HomeworkRepository extends JpaRepository<Homework, Long> {

}
