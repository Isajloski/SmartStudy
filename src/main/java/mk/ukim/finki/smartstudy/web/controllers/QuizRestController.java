package mk.ukim.finki.smartstudy.web.controllers;


import mk.ukim.finki.smartstudy.model.Quiz;
import mk.ukim.finki.smartstudy.service.QuizService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/quiz")
public class QuizRestController {

    final private QuizService quizService;

    public QuizRestController(QuizService quizService) {
        this.quizService = quizService;
    }

    @GetMapping("/findById/{id}")
    public Quiz findById(@PathVariable Long id){
        return quizService.findById(id);
    }

    @GetMapping("/findQuizByCourseId/{id}")
    public List<Quiz> findQuizByCourseId(@PathVariable Long id){
        return quizService.findQuizByCourseId(id);
    }

    @PostMapping("/create")
    public Quiz create(@RequestParam String name, @RequestParam int time, @RequestParam Long id){
        return this.quizService.create(name, time, id);
    }

    @PostMapping("/edit/{id}")
    public Quiz edit(@PathVariable Long id, @RequestParam String name, @RequestParam int time){
        return this.quizService.edit(id, name, time);
    }

    @PostMapping("/delete/{id}")
    public Quiz delete(@PathVariable Long id){
        return this.quizService.delete(id);
    }
}
