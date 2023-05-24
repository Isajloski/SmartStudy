package mk.ukim.finki.smartstudy.service;


import mk.ukim.finki.smartstudy.model.auth.Example;

import java.util.List;

public interface ExampleService {

    List<Example> listAll();

    Example findById(Long id);

    Example create(String name, int number);

    Example update(Long id, String name, int number);

    Example delete(Long id);

}
