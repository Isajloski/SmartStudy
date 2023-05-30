package mk.ukim.finki.smartstudy.data;


import mk.ukim.finki.smartstudy.model.enumerations.ERole;
import mk.ukim.finki.smartstudy.service.*;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.time.Instant;
import java.util.Date;

@Component
public class DataInitializer{

    private final CourseService courseService;

    private final SectionService sectionService;

    private final MaterialService materialService;
    private final RoleService roleService;
    private final UserService userService;

    private final QuizService quizService;

    private final QuestionService questionService;

    public DataInitializer(CourseService courseService, SectionService sectionService, MaterialService materialService, RoleService roleService, UserService userService, QuizService quizService, QuestionService questionService) {
        this.courseService = courseService;
        this.sectionService = sectionService;
        this.materialService = materialService;
        this.roleService = roleService;
        this.userService = userService;
        this.quizService = quizService;
        this.questionService = questionService;
    }

    @PostConstruct
    public void initData(){
        //Role init
        this.roleService.insertInto(ERole.ROLE_PROFESSOR);
        this.roleService.insertInto(ERole.ROLE_STUDENT);

        //User init
        this.userService.insertInto("bojan.smart-study", "bojan.smart-study@email.com", "123456789", "Bojan", "Simichiev", "Skopje", "MKD", Date.from(Instant.now()), "Description number 1", ERole.ROLE_PROFESSOR);
        this.userService.insertInto("student_1.smart-study", "student_1.smart-study@email.com", "123456789", "Student_1", "LastName_1", "Skopje", "MKD", Date.from(Instant.now()), "Description number 1", ERole.ROLE_STUDENT);
        this.userService.insertInto("student_2.smart-study", "student_2.smart-study@email.com", "123456789", "Student_2", "LastName_2", "Skopje", "MKD", Date.from(Instant.now()), "Description number 2",  ERole.ROLE_STUDENT);
        this.userService.insertInto("student_3.smart-study", "student_3.smart-study@email.com", "123456789", "Student_3", "LastName_3", "Skopje", "MKD", Date.from(Instant.now()), "Description number 3",  ERole.ROLE_STUDENT);
        this.userService.insertInto("student_4.smart-study", "student_4.smart-study@email.com", "123456789", "Student_4", "LastName_4", "Skopje", "MKD", Date.from(Instant.now()), "Description number 4",  ERole.ROLE_STUDENT);
        this.userService.insertInto("student_5.smart-study", "student_5.smart-study@email.com", "123456789", "Student_5", "LastName_5", "Skopje", "MKD", Date.from(Instant.now()), "Description number 5",  ERole.ROLE_STUDENT);

        //Course and sections init
        this.courseService.create("Управување со ИКТ проекти");
        this.sectionService.create("Прв колоквиум предавања", 1L);
        this.sectionService.create("Втор колоквиум предавања", 1L);
        this.sectionService.create("Тестови", 1L);
        this.sectionService.create("Домашни", 1L);

        //Adding students to course
        this.userService.enrollStudentIntoCourse(2L, 1L);
        this.userService.enrollStudentIntoCourse(3L, 1L);
        this.userService.enrollStudentIntoCourse(4L, 1L);
        this.userService.enrollStudentIntoCourse(5L, 1L);

        this.quizService.create("Прв колоквиум", 35, 1L);
        this.quizService.create("Втор колоквиум", 60, 1L);

        this.questionService.create("Колку краци има македонското знаме?", "d", "9", "5", "3", "8", 1L);
        this.questionService.create("Колку краци има јапонското знаме?", "c", "9", "5", "1", "8", 1L);
        this.questionService.create("Колку бои има германското знаме", "c", "9", "5", "3", "8", 1L);
        this.questionService.create("Колку бои има германското знаме", "c", "9", "5", "3", "8", 1L);
        this.questionService.create("Колку бои има германското знаме", "c", "9", "5", "3", "8", 1L);

    }

}
