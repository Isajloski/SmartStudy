package mk.ukim.finki.smartstudy.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Example {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    private int number;

    public Example(String name, int number) {
        this.name = name;
        this.number = number;
    }

    public Example() {

    }

    public Example(Long id, String name, int number) {
        this.id = id;
        this.name = name;
        this.number = number;
    }
}
