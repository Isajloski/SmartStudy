package mk.ukim.finki.smartstudy.service;

import mk.ukim.finki.smartstudy.model.auth.User;
import mk.ukim.finki.smartstudy.model.enumerations.ERole;

public interface UserService {
    User insertInto(String username, String email, String password, String firstName, String lastName, ERole eRole);

    void enrollStudentIntoCourse(Long userId, Long courseId);
}
