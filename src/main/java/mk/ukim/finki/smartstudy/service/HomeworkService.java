package mk.ukim.finki.smartstudy.service;

import mk.ukim.finki.smartstudy.model.Homework;
import mk.ukim.finki.smartstudy.model.HomeworkSubmission;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Date;

public interface HomeworkService {

    Homework create(String name, String homeworkFileName,MultipartFile file, Long sectionId, Date deadline) throws IOException;

    HomeworkSubmission submit (String fileName, Long homeworkId, Long studentId, MultipartFile file) throws IOException;
}
