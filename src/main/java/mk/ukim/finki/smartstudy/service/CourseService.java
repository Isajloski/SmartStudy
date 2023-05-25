package mk.ukim.finki.smartstudy.service;

import mk.ukim.finki.smartstudy.model.Course;
import mk.ukim.finki.smartstudy.model.Example;

import java.util.List;

public interface CourseService {
    List<Course> listAll();

    Course findById(Long id);

    Course create(String name);

    Course delete(Long id);
}
