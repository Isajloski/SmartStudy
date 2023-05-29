package mk.ukim.finki.smartstudy.web.controllers;

import mk.ukim.finki.smartstudy.model.Question;
import mk.ukim.finki.smartstudy.service.QuestionService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/question")
public class QuestionsRestController {
    final private QuestionService questionService;

    public QuestionsRestController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @GetMapping("/findById/{id}")
    public Question findById(@PathVariable Long id) {
        return this.questionService.findById(id);
    }

    @PostMapping("/create")
    public Question create(@RequestParam String name,
                           @RequestParam String answer,
                           @RequestParam String a,
                           @RequestParam String b,
                           @RequestParam String c,
                           @RequestParam String d,
                           @RequestParam long quiz_id) {
        return this.questionService.create(name, answer, a, b, c, d, quiz_id);
    }

    @PostMapping("/edit/{id}")
    public Question edit(@PathVariable Long id,
                         @RequestParam String name,
                         @RequestParam String answer,
                         @RequestParam String a,
                         @RequestParam String b,
                         @RequestParam String c,
                         @RequestParam String d) {
        return this.questionService.edit(id, name, answer, a, b, c, d);
    }

    @GetMapping("/findQuestionByQuizId/{id}")
    public List<Question> findQuestionByQuizId(@PathVariable Long id){
        return questionService.findQuestionByQuiz(id);
    }

}

