package mk.ukim.finki.smartstudy.web.controllers;

import mk.ukim.finki.smartstudy.model.auth.Role;
import mk.ukim.finki.smartstudy.model.auth.User;
import mk.ukim.finki.smartstudy.model.enumerations.ERole;
import mk.ukim.finki.smartstudy.payload.request.LoginRequest;
import mk.ukim.finki.smartstudy.payload.request.SignupRequest;
import mk.ukim.finki.smartstudy.payload.response.MessageResponse;
import mk.ukim.finki.smartstudy.payload.response.UserInfoResponse;
import mk.ukim.finki.smartstudy.repository.RoleRepository;
import mk.ukim.finki.smartstudy.repository.UserRepository;
import mk.ukim.finki.smartstudy.security.jwt.JwtUtils;
import mk.ukim.finki.smartstudy.security.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")


public class AuthController {
  @Autowired
  AuthenticationManager authenticationManager;

  @Autowired
  UserRepository userRepository;

  @Autowired
  RoleRepository roleRepository;

  @Autowired
  PasswordEncoder encoder;

  @Autowired
  JwtUtils jwtUtils;

  @PostMapping("/signin")
  public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

    Authentication authentication = authenticationManager
        .authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

    SecurityContextHolder.getContext().setAuthentication(authentication);

    UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

    ResponseCookie jwtCookie = jwtUtils.generateJwtCookie(userDetails);

    List<String> roles = userDetails.getAuthorities().stream()
        .map(item -> item.getAuthority())
        .collect(Collectors.toList());

    return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, jwtCookie.toString())
        .body(new UserInfoResponse(userDetails.getId(),
                                   userDetails.getUsername(),
                                   userDetails.getEmail(),
                                   roles));
  }

  @PostMapping("/signup")
  public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
    if (userRepository.existsByUsername(signUpRequest.getUsername())) {
      return ResponseEntity.badRequest().body(new MessageResponse("Error: Username is already taken!"));
    }

    if (userRepository.existsByEmail(signUpRequest.getEmail())) {
      return ResponseEntity.badRequest().body(new MessageResponse("Error: Email is already in use!"));
    }

    // Create new user's account
    User user = new User(signUpRequest.getUsername(),
                         signUpRequest.getEmail(),
                         encoder.encode(signUpRequest.getPassword()),
            signUpRequest.getFirst_name(),
            signUpRequest.getLast_name());

    String strRoles = signUpRequest.getRole();
    Role role = null;

    if (strRoles.equals("student")) {
      role = roleRepository.findByName(ERole.ROLE_STUDENT)
          .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
    }
    else if (strRoles.equals("professor")) {
      role = roleRepository.findByName(ERole.ROLE_PROFESSOR)
              .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
    }


    user.setRole(role);
    userRepository.save(user);

    return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
  }

  @PostMapping("/signout")
  public ResponseEntity<?> logoutUser() {
    ResponseCookie cookie = jwtUtils.getCleanJwtCookie();
    return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, cookie.toString())
        .body(new MessageResponse("You've been signed out!"));
  }
}
