package mk.ukim.finki.smartstudy.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;
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

//    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL, orphanRemoval = true)
//    @JsonBackReference
//    private List<Section> sections;

    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonBackReference
    private List<Section> sections = new ArrayList<>();

    //To-Do
    //1. Has many users
    //2. Has one Owner(User) who is of Proffesor role!

    public Course(){}

    public Course(String name){
        this.name = name;
    }

}
