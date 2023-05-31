package mk.ukim.finki.smartstudy.web.controllers;

import mk.ukim.finki.smartstudy.model.auth.User;
import mk.ukim.finki.smartstudy.service.UserService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping()
    public User findById(@RequestParam Long id) throws Exception {
        User user = this.userService.findById(id);

        return user;
    }
}
