package mk.ukim.finki.smartstudy.service.Impl;

import mk.ukim.finki.smartstudy.exceptions.ExampleException;
import mk.ukim.finki.smartstudy.model.Course;
import mk.ukim.finki.smartstudy.model.Example;
import mk.ukim.finki.smartstudy.repository.CourseRepository;
import mk.ukim.finki.smartstudy.service.CourseService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseServiceImpl implements CourseService {

    final private CourseRepository courseRepository;

    public CourseServiceImpl(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    @Override
    public List<Course> listAll() {
        return this.courseRepository.findAll();
    }

    @Override
    public Course findById(Long id) {
        return this.courseRepository.findById(id).orElseThrow(ExampleException::new);
    }

    @Override
    public Course create(String name) {
        return this.courseRepository.save(new Course(name));
    }

    @Override
    public Course delete(Long id) {
        Course course = findById(id);
        this.courseRepository.delete(course);
        return course;
    }
}
