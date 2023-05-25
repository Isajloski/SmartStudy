package mk.ukim.finki.smartstudy.web;

import mk.ukim.finki.smartstudy.model.Example;
import mk.ukim.finki.smartstudy.model.Section;
import mk.ukim.finki.smartstudy.service.SectionService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/section")
public class SectionRestController {
    final private SectionService sectionService;

    public SectionRestController(SectionService sectionService) {
        this.sectionService = sectionService;
    }
    @GetMapping("/listAll")
    public List<Section> listAll(){
        return this.sectionService.listAll();
    }

    @PostMapping("/create")
    public Section create(@RequestParam Long courseId, @RequestParam String name){
        return this.sectionService.create(name, courseId);
    }
}
