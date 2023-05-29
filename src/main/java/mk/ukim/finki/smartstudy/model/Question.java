package mk.ukim.finki.smartstudy.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String answer;

    private String a;
    private String b;
    private String c;
    private String d;

    @ManyToOne
    @JsonBackReference
    private Quiz quiz;

    public Question(String name, String answer, String a, String b, String c, String d, Quiz quiz) {
        this.name = name;
        this.answer = answer;
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.quiz =quiz;
    }

    public Question() {

    }
}
