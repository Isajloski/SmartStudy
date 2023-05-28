package mk.ukim.finki.smartstudy.web.controllers;

import mk.ukim.finki.smartstudy.model.Homework;
import mk.ukim.finki.smartstudy.model.HomeworkSubmission;
import mk.ukim.finki.smartstudy.service.HomeworkService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Date;

@RestController
@CrossOrigin
@RequestMapping("/api/homework")
public class HomeworkController {

    private final HomeworkService homeworkService;

    public HomeworkController(HomeworkService homeworkService) {
        this.homeworkService = homeworkService;
    }

    @PostMapping("/create")
    public Homework create(@RequestParam String name, @RequestParam String homeworkFileName, @RequestPart MultipartFile file, @RequestParam Long sectionId, @RequestParam Date deadline) throws IOException {
        return this.homeworkService.create(name, homeworkFileName, file, sectionId, deadline);
    }

    @PostMapping("/submit")
    public HomeworkSubmission submitHomework (@RequestParam String fileName, @RequestParam String homeworkId, @RequestPart MultipartFile file) throws IOException {
        //TODO: Somehow fetch the logged user's id
        return this.homeworkService.submit(fileName, Long.parseLong(homeworkId), 1L, file);//TODO: Change the 1L with the id of the logged in user
    }



}
