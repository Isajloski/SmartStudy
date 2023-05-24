package mk.ukim.finki.smartstudy.data;


import mk.ukim.finki.smartstudy.model.enumerations.ERole;
import mk.ukim.finki.smartstudy.service.RoleService;
import mk.ukim.finki.smartstudy.service.UserService;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
public class DataInitializer{

    private final RoleService roleService;
    private final UserService userService;

    public DataInitializer(RoleService roleService, UserService userService) {
        this.roleService = roleService;
        this.userService = userService;
    }

    @PostConstruct
    public void initData(){
        this.roleService.insertInto(ERole.ROLE_PROFESSOR);
        this.roleService.insertInto(ERole.ROLE_STUDENT);

        this.userService.insertInto("bojan.smart-study", "bojan.smart-study@email.com", "123456789", "Bojan", "Simichiev", ERole.ROLE_PROFESSOR);
    }

}
