package mk.ukim.finki.smartstudy.repository;

import mk.ukim.finki.smartstudy.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionsRepository extends JpaRepository<Question, Long> {
    List<Question> findQuestionByQuizId(Long id);
}
