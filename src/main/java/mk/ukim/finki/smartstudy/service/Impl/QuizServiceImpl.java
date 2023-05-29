package mk.ukim.finki.smartstudy.service.Impl;

import mk.ukim.finki.smartstudy.exceptions.ExampleException;
import mk.ukim.finki.smartstudy.model.Course;
import mk.ukim.finki.smartstudy.model.Quiz;
import mk.ukim.finki.smartstudy.repository.QuizRepository;
import mk.ukim.finki.smartstudy.service.CourseService;
import mk.ukim.finki.smartstudy.service.QuizService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuizServiceImpl implements QuizService {

    final private CourseService courseService;
    final private QuizRepository quizRepository;

    public QuizServiceImpl(CourseService courseService, QuizRepository quizRepository) {
        this.courseService = courseService;
        this.quizRepository = quizRepository;
    }

    @Override
    public List<Quiz> findQuizByCourseId(Long id) {
        return this.quizRepository.findQuizByCourseId(id);
    }

    @Override
    public Quiz create(String name, int time, Long course_id) {
       Course course = this.courseService.findById(course_id);
       return quizRepository.save(new Quiz(name, time, course));
    }

    @Override
    public Quiz edit(Long id, String name, int time) {
        Quiz quiz = findById(id);
        quiz.setTime(time);
        quiz.setName(name);
        return this.quizRepository.save(quiz);
    }

    @Override
    public List<Quiz> listAll(Long id) {
        return this.quizRepository.findAll();
    }

    @Override
    public Quiz delete(Long id) {
        Quiz quiz = findById(id);
        this.quizRepository.delete(quiz);
        return quiz;
    }

    @Override
    public Quiz findById(Long id) {
        return this.quizRepository.findById(id).orElseThrow(ExampleException::new);
    }

}
