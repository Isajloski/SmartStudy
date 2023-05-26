package mk.ukim.finki.smartstudy.web.controllers;

import mk.ukim.finki.smartstudy.model.Course;
import mk.ukim.finki.smartstudy.service.CourseService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/course")
public class CourseRestController {
    final private CourseService courseService;

    public CourseRestController(CourseService courseService) {
        this.courseService = courseService;
    }


    @GetMapping("/listAll")
    public List<Course> listAll(){
        return courseService.listAll();
    }

    @GetMapping("/findyById/{id}")
    public Course findById(@PathVariable Long id){
        return courseService.findById(id);
    }

    @PostMapping("/create")
    public Course create(@RequestParam String name){
        return this.courseService.create(name);
    }

    @PostMapping("/delete/{id}")
    public Course delete(@PathVariable Long id){
        return this.courseService.delete(id);
    }


}
