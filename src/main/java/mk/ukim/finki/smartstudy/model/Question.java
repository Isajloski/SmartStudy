package mk.ukim.finki.smartstudy.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String questionContent;

    private Boolean isAnsweredCorrectly;

    private Integer points;

    @OneToMany(mappedBy = "question")
    private List<Answer> answers;

    @ManyToOne
    @JsonBackReference
    private Quiz quiz;

    public Question() {
        this.answers = new ArrayList<>();
    }
}
