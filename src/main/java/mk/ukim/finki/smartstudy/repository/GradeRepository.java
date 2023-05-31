package mk.ukim.finki.smartstudy.repository;

import mk.ukim.finki.smartstudy.model.Course;
import mk.ukim.finki.smartstudy.model.Grade;
import mk.ukim.finki.smartstudy.model.auth.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GradeRepository extends JpaRepository<Grade, Long> {
    List<Grade> findGradesByCourseId(Long courseId);
//TO-DO (Да може да се најдат сите Grades според User Id). како што е претходно
//    List<Grade> findByUserUser_id(Long id);

    Grade findByUserAndCourse(User user, Course course);


}
