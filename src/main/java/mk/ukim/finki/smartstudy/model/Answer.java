package mk.ukim.finki.smartstudy.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Boolean isRight;

    private String answerContent;

    @ManyToOne
    @JsonBackReference
    private Question question;

    public Answer() {}

    public Answer(Long id, Boolean isRight, String answerContent) {
        this.id = id;
        this.isRight = isRight;
        this.answerContent = answerContent;
    }
}
