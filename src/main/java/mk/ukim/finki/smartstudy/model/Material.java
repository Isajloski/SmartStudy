package mk.ukim.finki.smartstudy.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Entity
@Data
public class Material {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "section_id")
    private Section section;
    @Lob
    @Basic(fetch = FetchType.LAZY)
    private byte[] file;

    public Material(String name, MultipartFile file, Section section ) throws IOException {
        this.name = name;
        this.file = file.getBytes();
        this.section = section;
    }

    public Material() {

    }


    // Constructors, getters, and setters


}
