package mk.ukim.finki.smartstudy.web.controllers;

import mk.ukim.finki.smartstudy.model.Grade;
import mk.ukim.finki.smartstudy.service.GradeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/grade")
public class GradeRestController {

    final private GradeService gradeService;


    public GradeRestController(GradeService gradeService) {
        this.gradeService = gradeService;
    }

    @GetMapping("/listAll")
    public List<Grade> listAll(){
        return gradeService.listAll();
    }


    @GetMapping("/findGradeByCourseId/{id}")
    public List<Grade> findGradeByCourseId(@PathVariable Long id){
        return this.gradeService.findGradeByCourse(id);
    }

//    @GetMapping("/findGradeByUser/{id}")
//    public List<Grade> findGradeByUser(@PathVariable Long id){
//        return this.gradeService.findGradeByUser(id);
//    }
//

    @GetMapping("/findByUserAndCourse")
    public Grade findByUserAndCourse(@RequestParam Long user_id, @RequestParam Long course_id) throws Exception {
        return this.gradeService.findByUserAndCourse(user_id, course_id);
    }

    @GetMapping("/findyById/{id}")
    public Grade findById(@PathVariable Long id) throws Exception {
        return gradeService.findById(id);
    }

    @PostMapping("/create")
    public Grade create(@RequestParam Long user_id,
                          @RequestParam Long course_id,
                        @RequestParam int grade) throws Exception {
        return this.gradeService.create(user_id, course_id, grade);
    }

    @PostMapping("/delete/{id}")
    public Grade delete(@PathVariable Long id) throws Exception {
        return this.gradeService.delete(id);
    }


    @PostMapping("/edit/{id}")
    public Grade edit(@PathVariable Long id,
                        @RequestParam int grade) throws Exception {
        return this.gradeService.edit(id, grade);
    }

}
