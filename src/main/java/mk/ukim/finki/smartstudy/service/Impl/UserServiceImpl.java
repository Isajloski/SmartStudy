package mk.ukim.finki.smartstudy.service.Impl;

import mk.ukim.finki.smartstudy.model.auth.Role;
import mk.ukim.finki.smartstudy.model.auth.User;
import mk.ukim.finki.smartstudy.model.enumerations.ERole;
import mk.ukim.finki.smartstudy.repository.RoleRepository;
import mk.ukim.finki.smartstudy.repository.UserRepository;
import mk.ukim.finki.smartstudy.service.UserService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private final PasswordEncoder encoder;
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    public UserServiceImpl(PasswordEncoder encoder, UserRepository userRepository, RoleRepository roleRepository) {
        this.encoder = encoder;
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    @Override
    public User insertInto(String username, String email, String password, String firstName, String lastName, ERole eRole) {
        User user = new User(username, email, encoder.encode(password), firstName, lastName);
        Role role = this.roleRepository.findByName(eRole)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
        user.setRole(role);

        return this.userRepository.save(user);
    }
}
