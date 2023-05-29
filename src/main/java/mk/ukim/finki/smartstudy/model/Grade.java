package mk.ukim.finki.smartstudy.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;
import mk.ukim.finki.smartstudy.model.auth.User;

import javax.persistence.*;

@Entity
@Data
public class Grade { //TODO: The connection between the quiz and the course need to be made

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int grade;

    @ManyToOne
    @JsonBackReference
    private User user;



    @ManyToOne
    @JsonBackReference
    private Course course;

    public Grade(User user, Course course, int grade) {
        this.user = user;
        this.grade =grade;
        this.course =course;
    }

//    @ManyToOne
//    @JoinColumn(name = "user_id")
//    private User user;
//
//    @ManyToOne
//    @JoinColumn(name = "course_id")
//    private Course course;

    public Grade(){

    }
}
