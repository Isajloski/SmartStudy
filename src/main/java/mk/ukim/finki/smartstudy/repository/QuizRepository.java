package mk.ukim.finki.smartstudy.repository;

import mk.ukim.finki.smartstudy.model.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuizRepository extends JpaRepository<Quiz, Long> {
    List<Quiz> findQuizByCourseId(Long id);
}
