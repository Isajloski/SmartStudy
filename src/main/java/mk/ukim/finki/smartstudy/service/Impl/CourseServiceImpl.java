package mk.ukim.finki.smartstudy.service.Impl;

import mk.ukim.finki.smartstudy.exceptions.ExampleException;
import mk.ukim.finki.smartstudy.model.Course;
import mk.ukim.finki.smartstudy.repository.CourseRepository;
import mk.ukim.finki.smartstudy.service.CourseService;
import mk.ukim.finki.smartstudy.service.UserService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseServiceImpl implements CourseService {

    final private CourseRepository courseRepository;
    final private UserService userService;

    public CourseServiceImpl(CourseRepository courseRepository, UserService userService) {
        this.courseRepository = courseRepository;
        this.userService = userService;
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

    @Override
    public Course edit(Long id, String name) {
        Course course = findById(id);
        course.setName(name);
        this.courseRepository.save(course);
        return course;
    }
}
