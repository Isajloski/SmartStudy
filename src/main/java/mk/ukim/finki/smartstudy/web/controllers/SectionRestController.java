package mk.ukim.finki.smartstudy.web.controllers;

import mk.ukim.finki.smartstudy.model.Section;
import mk.ukim.finki.smartstudy.payload.request.SectionCreateRequest;
import mk.ukim.finki.smartstudy.service.CourseService;
import mk.ukim.finki.smartstudy.service.SectionService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/section")
public class SectionRestController {
    private final SectionService sectionService;
    private final CourseService courseService;

    public SectionRestController(SectionService sectionService, CourseService courseService) {
        this.sectionService = sectionService;
        this.courseService = courseService;
    }
    @GetMapping("/listAll")
    public List<Section> listAll(){
        return this.sectionService.listAll();
    }

    @GetMapping("/findById/{id}")
    public Section findById(@PathVariable Long id){
        return this.sectionService.findById(id);
    }

    @GetMapping("/findSectionsByCourseId/{id}")
    public List<Section> findSectionsByCourseId(@PathVariable Long id){
        return this.sectionService.findSectionsByCourseId(id);
    }

    @PostMapping("/create")
    public Section create(@RequestParam Long courseId, @RequestBody SectionCreateRequest sectionCreateRequest){
        return this.courseService.addSectionToCourse(sectionCreateRequest.getName(), courseId);
    }
    @PostMapping("/delete/{id}")
    public Section delete(@PathVariable Long id){
        return this.sectionService.delete(id);
    }

    @PostMapping("/edit/{id}")
    public Section edit(@PathVariable Long id,
                        @RequestParam String name){
        return this.sectionService.edit(id, name);
    }



}
