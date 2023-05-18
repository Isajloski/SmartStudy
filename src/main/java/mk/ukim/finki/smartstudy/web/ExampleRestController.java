package mk.ukim.finki.smartstudy.web;

import mk.ukim.finki.smartstudy.model.Example;
import mk.ukim.finki.smartstudy.service.ExampleService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class ExampleRestController {

    final private ExampleService exampleService;

    public ExampleRestController(ExampleService exampleService) {
        this.exampleService = exampleService;
    }

    @GetMapping("/listAll")
    public List<Example> listAll(){
        return exampleService.listAll();
    }

    @GetMapping("/findyById/{id}")
    public Example findById(@PathVariable Long id){
        return exampleService.findById(id);
    }

    @PostMapping("/create")
    public Example create(@RequestParam String name,
                          @RequestParam int number){
        return this.exampleService.create(name, number);
    }

    @PostMapping("/delete/{id}")
    public Example delete(@PathVariable Long id){
        return this.exampleService.delete(id);
    }


    @PostMapping("/edit/{id}")
    public Example edit(@PathVariable Long id,
                        @RequestParam String name,
                        @RequestParam int number){
        return this.exampleService.update(id,name,number);
    }
}
