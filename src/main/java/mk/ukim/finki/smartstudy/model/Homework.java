package mk.ukim.finki.smartstudy.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;
import java.io.IOException;
import java.util.Date;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class Homework {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String homeworkFileName;

    @ManyToOne
    @JsonBackReference
    private Section section;

    @Lob
    @Basic(fetch = FetchType.LAZY)
    private byte[] homeworkFile;

    @OneToMany (mappedBy = "homework")
    private List<HomeworkSubmission> homeworkSubmissions;

    private Date deadline;

    public Homework(String name, String homeworkFileName,Section section, MultipartFile homeworkFile, Date deadline) throws IOException {
        this.name = name;
        this.homeworkFileName = homeworkFileName;
        this.section = section;
        this.homeworkFile = homeworkFile.getBytes();
        this.deadline = deadline;
    }

    public void addHomeworkSubmission(HomeworkSubmission homeworkSubmission){
        this.homeworkSubmissions.add(homeworkSubmission);
    }
}
