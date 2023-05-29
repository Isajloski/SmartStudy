package mk.ukim.finki.smartstudy.service;

import mk.ukim.finki.smartstudy.model.Question;

import java.util.List;

public interface QuestionService  {
    Question create(String name, String answer, String a, String b, String c, String d, long quiz_id);

    Question findById(Long id);

    Question delete(Long id);
    Question edit(Long id, String name, String answer, String a, String b, String c, String d);

    List<Question> findQuestionByQuizId(Long id);

    List<Question> findQuestionByQuiz(Long id);
}
