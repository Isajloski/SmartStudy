package mk.ukim.finki.smartstudy.service.Impl;

import mk.ukim.finki.smartstudy.exceptions.ExampleException;
import mk.ukim.finki.smartstudy.model.Question;
import mk.ukim.finki.smartstudy.model.Quiz;
import mk.ukim.finki.smartstudy.repository.QuestionsRepository;
import mk.ukim.finki.smartstudy.service.QuestionService;
import mk.ukim.finki.smartstudy.service.QuizService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionServiceImpl implements QuestionService {

    final private QuestionsRepository questionsRepository;

    final private QuizService quizService;

    public QuestionServiceImpl(QuestionsRepository questionsRepository, QuizService quizService) {
        this.questionsRepository = questionsRepository;
        this.quizService = quizService;
    }

    @Override
    public Question create(String name, String answer, String a, String b, String c, String d, long quiz_id) {
        Quiz quiz = this.quizService.findById(quiz_id);
        Question question = new Question(name, answer, a, b, c, d, quiz);
        return this.questionsRepository.save(question);
    }

    @Override
    public Question findById(Long id) {
        return this.questionsRepository.findById(id).orElseThrow(ExampleException::new);
    }

    @Override
    public Question delete(Long id) {
        Question question = findById(id);
        this.questionsRepository.delete(question);
        return question;
    }

    @Override
    public Question edit(Long id, String name, String answer, String a, String b, String c, String d) {
        Question question = findById(id);
        question.setName(name);
        question.setAnswer(answer);
        question.setA(a);
        question.setB(b);
        question.setC(c);
        question.setD(d);
        return this.questionsRepository.save(question);
    }

    @Override
    public List<Question> findQuestionByQuizId(Long id) {
        return this.questionsRepository.findQuestionByQuizId(id);
    }

    @Override
    public List<Question> findQuestionByQuiz(Long id) {
        return this.questionsRepository.findQuestionByQuizId(id);
    }
}
