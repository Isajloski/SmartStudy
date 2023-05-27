package mk.ukim.finki.smartstudy.web.controllers;


import mk.ukim.finki.smartstudy.payload.request.EnrollStudentRequest;
import mk.ukim.finki.smartstudy.service.UserService;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/student")
public class StudentRestController {

    private UserService userService;

    public StudentRestController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/enroll")
    public String enrollStudent (@Valid @RequestBody EnrollStudentRequest enrollStudentRequest){

        this.userService.enrollStudentIntoCourse(Long.parseLong(enrollStudentRequest.getUser_id()), Long.parseLong(enrollStudentRequest.getCourse_id()));

        return "Successfully enrolled";
    }
}
