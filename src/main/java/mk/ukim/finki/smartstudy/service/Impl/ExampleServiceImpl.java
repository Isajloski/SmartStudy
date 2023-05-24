package mk.ukim.finki.smartstudy.service.Impl;

import mk.ukim.finki.smartstudy.exceptions.ExampleException;
import mk.ukim.finki.smartstudy.model.auth.Example;
import mk.ukim.finki.smartstudy.repository.ExampleRepository;
import mk.ukim.finki.smartstudy.service.ExampleService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExampleServiceImpl implements ExampleService {

    final private ExampleRepository exampleRepository;

    public ExampleServiceImpl(ExampleRepository exampleRepository) {
        this.exampleRepository = exampleRepository;
    }

    @Override
    public List<Example> listAll() {
       return this.exampleRepository.findAll();
    }

    @Override
    public Example findById(Long id) {
        return this.exampleRepository.findById(id).orElseThrow(ExampleException::new);
    }

    @Override
    public Example create(String name, int number) {
        Example example = new Example(name, number);
        this.exampleRepository.save(example);
        return example;
    }

    @Override
    public Example update(Long id, String name, int number) {
        Example example = this.findById(id);
        example.setId(id);
        example.setName(name);
        example.setNumber(number);
        return this.exampleRepository.save(example);
    }

    @Override
    public Example delete(Long id) {
        Example example = findById(id);
        this.exampleRepository.delete(example);
        return example;
    }
}
