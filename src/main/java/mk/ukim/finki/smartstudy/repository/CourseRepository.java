package mk.ukim.finki.smartstudy.repository;

import mk.ukim.finki.smartstudy.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;


public interface CourseRepository extends JpaRepository<Course, Long> {
}