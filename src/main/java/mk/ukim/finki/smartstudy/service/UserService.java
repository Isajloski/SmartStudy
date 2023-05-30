package mk.ukim.finki.smartstudy.service;

import mk.ukim.finki.smartstudy.model.auth.User;
import mk.ukim.finki.smartstudy.model.enumerations.ERole;

import java.util.Date;

public interface UserService {
    User insertInto(String username, String email, String password, String first_name, String last_name, String city, String country, Date birthday, String description, ERole eRole);
    User findById(Long id) throws Exception;
    void enrollStudentIntoCourse(Long userId, Long courseId);
}
