package mk.ukim.finki.smartstudy.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import java.util.List;

@Entity
@Data
public class Quiz { //TODO: The connection between the quiz and the course need to be made

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String quizTitle;

    private Integer points;

    private Boolean isPassed;

    @Max(5)
    @Min(1)
    private Integer grade;

    @OneToMany(mappedBy = "quiz")
    private List<Question> questions;

    public Quiz() {}
}
