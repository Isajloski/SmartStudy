package mk.ukim.finki.smartstudy.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Section {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToMany (mappedBy = "section",fetch = FetchType.EAGER)
    private List<Material> materials = new ArrayList<>();


    @ManyToOne
    @JoinColumn(
            name="course_id"
    )
    @JsonBackReference
    private Course course;



    public Section(String name) {
        this.name = name;
    }

}
