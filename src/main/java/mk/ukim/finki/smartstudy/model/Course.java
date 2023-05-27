package mk.ukim.finki.smartstudy.model;

import lombok.Data;
import mk.ukim.finki.smartstudy.model.auth.User;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class Course {
    @Id
    @GeneratedValue
    private Long id;

    private String name;

    @OneToMany(cascade = CascadeType.PERSIST, mappedBy = "course")
    private List<Section> sections = new ArrayList<>();

    @ManyToMany (fetch = FetchType.LAZY)
    private List<User> students;

    @ManyToOne
    private User professor;

    @OneToOne
    private Quiz quiz;

    public Course(){}

    public Course(String name){
        this.name = name;
    }

    public void addStudent(User user){
        this.students.add(user);
    }

    public void addSection(Section section)
    {
        this.sections.add(section);
        //section.setCourse(this);
    }

}
