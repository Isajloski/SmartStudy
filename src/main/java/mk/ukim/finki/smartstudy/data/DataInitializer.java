package mk.ukim.finki.smartstudy.data;


import jakarta.annotation.PostConstruct;
import mk.ukim.finki.smartstudy.service.ExampleService;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer{

    final private ExampleService exampleService;

    public DataInitializer(ExampleService exampleService) {
        this.exampleService = exampleService;
    }

    @PostConstruct
    public void initData(){
        for (int i = 1; i < 11; i++){
            this.exampleService.create("User-" + i, i);
        }
    }

}
