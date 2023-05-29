package mk.ukim.finki.smartstudy.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class Quiz { //TODO: The connection between the quiz and the course need to be made

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private int time;

    @OneToMany(mappedBy = "quiz", cascade = CascadeType.ALL)
    private List<Question> questions;

    @ManyToOne
    @JsonBackReference
    private Course course;

    public Quiz() {}

    public Quiz(String name, int time, Course course) {
        this.name = name;
        this.time = time;
        this.course = course;
    }
}
