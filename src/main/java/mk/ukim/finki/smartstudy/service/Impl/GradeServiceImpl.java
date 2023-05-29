package mk.ukim.finki.smartstudy.service.Impl;

import mk.ukim.finki.smartstudy.model.Course;
import mk.ukim.finki.smartstudy.model.Grade;
import mk.ukim.finki.smartstudy.model.auth.User;
import mk.ukim.finki.smartstudy.repository.GradeRepository;
import mk.ukim.finki.smartstudy.service.CourseService;
import mk.ukim.finki.smartstudy.service.GradeService;
import mk.ukim.finki.smartstudy.service.UserService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GradeServiceImpl implements GradeService {

    final private GradeRepository gradeRepository;
    final private UserService userService;
    final private CourseService courseService;


    public GradeServiceImpl(GradeRepository gradeRepository, UserService userService, CourseService courseService) {
        this.gradeRepository = gradeRepository;
        this.userService = userService;
        this.courseService = courseService;
    }


    @Override
    public List<Grade> listAll() {
        return this.gradeRepository.findAll();
    }

    @Override
    public Grade findById(Long id) throws Exception {
        return this.gradeRepository.findById(id).orElseThrow(Exception::new);
    }

    @Override
    public Grade create(Long user_id, Long course_id, int grade) throws Exception {
        User user = this.userService.findById(user_id);
        Course course = this.courseService.findById(course_id);
        Grade newGrade = new Grade(user, course, grade);
        this.gradeRepository.save(newGrade);
        return newGrade;
    }

    @Override
    public Grade delete(Long id) throws Exception {
        Grade grade = findById(id);
        this.gradeRepository.delete(grade);
        return grade;
    }

    @Override
    public Grade edit(Long id, int grade) throws Exception {
        Grade newGrade = findById(id);
        newGrade.setGrade(grade);
        this.gradeRepository.save(newGrade);
        return newGrade;
    }

    @Override
    public List<Grade> findGradeByCourse(Long id) {
        return this.gradeRepository.findGradesByCourseId(id);
    }

//    @Override
//    public List<Grade> findGradeByUser(Long id) {
//        return this.gradeRepository.findByUserUser_id(id);
//    }
}
