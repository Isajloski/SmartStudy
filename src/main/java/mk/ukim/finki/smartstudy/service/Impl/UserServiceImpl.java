package mk.ukim.finki.smartstudy.service.Impl;

import mk.ukim.finki.smartstudy.exceptions.CourseNotFoundException;
import mk.ukim.finki.smartstudy.exceptions.UserNotFoundException;
import mk.ukim.finki.smartstudy.model.Course;
import mk.ukim.finki.smartstudy.model.auth.Role;
import mk.ukim.finki.smartstudy.model.auth.User;
import mk.ukim.finki.smartstudy.model.enumerations.ERole;
import mk.ukim.finki.smartstudy.repository.CourseRepository;
import mk.ukim.finki.smartstudy.repository.RoleRepository;
import mk.ukim.finki.smartstudy.repository.UserRepository;
import mk.ukim.finki.smartstudy.service.UserService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class UserServiceImpl implements UserService {

    private final PasswordEncoder encoder;
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final CourseRepository courseRepository;

    public UserServiceImpl(PasswordEncoder encoder, UserRepository userRepository, RoleRepository roleRepository, CourseRepository courseRepository) {
        this.encoder = encoder;
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.courseRepository = courseRepository;
    }

    @Override
    public User insertInto(String username, String email, String password, String firstName, String lastName, ERole eRole) {
        User user = new User(username, email, encoder.encode(password), firstName, lastName);
        Role role = this.roleRepository.findByName(eRole)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
        user.setRole(role);

        return this.userRepository.save(user);
    }

    @Override
    public User findById(Long id) throws Exception {
        return this.userRepository.findById(id).orElseThrow(Exception::new);
    }

    @Override
    @Transactional
    public void enrollStudentIntoCourse(Long userId, Long courseId) {
        Course course = this.courseRepository.findById(courseId).orElseThrow(CourseNotFoundException::new);
        User user = this.userRepository.findById(userId).orElseThrow(UserNotFoundException::new);

        course.addStudent(user);
        this.courseRepository.save(course);

    }
}
