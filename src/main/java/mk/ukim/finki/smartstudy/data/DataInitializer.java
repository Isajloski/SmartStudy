package mk.ukim.finki.smartstudy.data;


import mk.ukim.finki.smartstudy.model.enumerations.ERole;
import mk.ukim.finki.smartstudy.service.*;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
public class DataInitializer{

    private final CourseService courseService;

    private final SectionService sectionService;

    private final MaterialService materialService;
    private final RoleService roleService;
    private final UserService userService;

    public DataInitializer(CourseService courseService, SectionService sectionService, MaterialService materialService, RoleService roleService, UserService userService) {
        this.courseService = courseService;
        this.sectionService = sectionService;
        this.materialService = materialService;
        this.roleService = roleService;
        this.userService = userService;
    }

    @PostConstruct
    public void initData(){
        this.roleService.insertInto(ERole.ROLE_PROFESSOR);
        this.roleService.insertInto(ERole.ROLE_STUDENT);

        this.userService.insertInto("bojan.smart-study", "bojan.smart-study@email.com", "123456789", "Bojan", "Simichiev", ERole.ROLE_PROFESSOR);
        this.courseService.create("Управување со ИКТ проекти");
        this.sectionService.create("Прв колоквиум предавања", 1L);
        this.sectionService.create("Втор колоквиум предавања", 1L);
        this.sectionService.create("Тестови", 1L);
        this.sectionService.create("Домашни", 1L);

    }

}
