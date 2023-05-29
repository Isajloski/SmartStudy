package mk.ukim.finki.smartstudy.service;

import mk.ukim.finki.smartstudy.model.Quiz;

import java.util.List;

public interface QuizService {

    List <Quiz> findQuizByCourseId(Long id);

    Quiz create(String name, int time, Long course_id);

    Quiz edit(Long id, String name, int time);

    List<Quiz> listAll(Long id);

    Quiz delete(Long id);

    Quiz findById(Long id);

}
