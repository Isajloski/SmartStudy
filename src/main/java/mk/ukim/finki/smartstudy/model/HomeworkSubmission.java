package mk.ukim.finki.smartstudy.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;
import lombok.NoArgsConstructor;
import mk.ukim.finki.smartstudy.model.auth.User;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;
import java.io.IOException;

@Entity
@Data
@NoArgsConstructor
public class HomeworkSubmission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User student;

    private String fileName;

    @ManyToOne
    @JsonBackReference
    private Homework homework;

    @Lob
    @Basic(fetch = FetchType.LAZY)
    private byte[] submittedFile;

    public HomeworkSubmission(String fileName, User student, Homework homework, MultipartFile submittedFile) throws IOException {
        this.student = student;
        this.fileName = fileName;
        this.homework = homework;
        this.submittedFile = submittedFile.getBytes();
    }
}
