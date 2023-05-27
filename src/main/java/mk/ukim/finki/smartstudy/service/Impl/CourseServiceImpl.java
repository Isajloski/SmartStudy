package mk.ukim.finki.smartstudy.service.Impl;

import mk.ukim.finki.smartstudy.exceptions.CourseNotFoundException;
import mk.ukim.finki.smartstudy.exceptions.ExampleException;
import mk.ukim.finki.smartstudy.model.Course;
import mk.ukim.finki.smartstudy.model.Section;
import mk.ukim.finki.smartstudy.repository.CourseRepository;
import mk.ukim.finki.smartstudy.repository.SectionRepository;
import mk.ukim.finki.smartstudy.service.CourseService;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class CourseServiceImpl implements CourseService {

    private final CourseRepository courseRepository;
    private final SectionRepository sectionRepository;

    public CourseServiceImpl(CourseRepository courseRepository, SectionRepository sectionRepository) {
        this.courseRepository = courseRepository;
        this.sectionRepository = sectionRepository;
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
    @Transactional
    public Section addSectionToCourse(String name, Long courseId) {
        Section section = this.sectionRepository.save(new Section(name));

        Course course = this.courseRepository.findById(courseId).orElseThrow(CourseNotFoundException::new);
        course.addSection(section);
        section.setCourse(course);

        this.courseRepository.save(course);
        this.sectionRepository.save(section);

        return section;
    }
}
