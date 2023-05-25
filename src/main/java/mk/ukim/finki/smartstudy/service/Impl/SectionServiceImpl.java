package mk.ukim.finki.smartstudy.service.Impl;

import mk.ukim.finki.smartstudy.exceptions.ExampleException;
import mk.ukim.finki.smartstudy.model.Course;
import mk.ukim.finki.smartstudy.model.Section;
import mk.ukim.finki.smartstudy.repository.SectionRepository;
import mk.ukim.finki.smartstudy.service.CourseService;
import mk.ukim.finki.smartstudy.service.SectionService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SectionServiceImpl implements SectionService {
    private final SectionRepository sectionRepository;
    private final CourseService courseService;

    public SectionServiceImpl(SectionRepository sectionRepository, CourseService courseService) {
        this.sectionRepository = sectionRepository;
        this.courseService = courseService;
    }

    public List<Section> listAll() {
        return sectionRepository.findAll();
    }

    public Section create(String name,  Long courseId) {
        Section section = new Section();
        section.setName(name);
        Course course = this.courseService.findById(courseId);
        section.setCourse(course);
        return sectionRepository.save(section);
    }

    @Override
    public Section findById(Long sectionId) {
        return this.sectionRepository.findById(sectionId).orElseThrow(ExampleException::new);
    }
}