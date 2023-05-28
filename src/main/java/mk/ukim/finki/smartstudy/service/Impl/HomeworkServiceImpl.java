package mk.ukim.finki.smartstudy.service.Impl;

import mk.ukim.finki.smartstudy.exceptions.HomeworkNotFoundException;
import mk.ukim.finki.smartstudy.exceptions.SectionNotFoundException;
import mk.ukim.finki.smartstudy.exceptions.UserNotFoundException;
import mk.ukim.finki.smartstudy.model.Homework;
import mk.ukim.finki.smartstudy.model.HomeworkSubmission;
import mk.ukim.finki.smartstudy.model.Section;
import mk.ukim.finki.smartstudy.model.auth.User;
import mk.ukim.finki.smartstudy.repository.HomeworkRepository;
import mk.ukim.finki.smartstudy.repository.HomeworkSubmissionRepository;
import mk.ukim.finki.smartstudy.repository.SectionRepository;
import mk.ukim.finki.smartstudy.repository.UserRepository;
import mk.ukim.finki.smartstudy.service.HomeworkService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Date;

@Service
public class HomeworkServiceImpl implements HomeworkService {

    private final HomeworkRepository homeworkRepository;
    private final SectionRepository sectionRepository;
    private final HomeworkSubmissionRepository homeworkSubmissionRepository;
    private final UserRepository userRepository;

    public HomeworkServiceImpl(HomeworkRepository homeworkRepository, SectionRepository sectionRepository, HomeworkSubmissionRepository homeworkSubmissionRepository, UserRepository userRepository) {
        this.homeworkRepository = homeworkRepository;
        this.sectionRepository = sectionRepository;
        this.homeworkSubmissionRepository = homeworkSubmissionRepository;
        this.userRepository = userRepository;
    }

    @Override
    public Homework create(String name, String homeworkFileName,MultipartFile file, Long sectionId, Date deadline) throws IOException {
        Section section = this.sectionRepository.findById(sectionId).orElseThrow(SectionNotFoundException::new);
        Homework homework = new Homework(name, homeworkFileName, section, file, deadline);
        //homework.setSection(section);
        section.addHomework(homework);

        this.homeworkRepository.save(homework);
        this.sectionRepository.save(section);

        return homework;
    }

    @Override
    public HomeworkSubmission submit(String fileName, Long homeworkId, Long studentId, MultipartFile file) throws IOException {
        Homework homework = this.homeworkRepository.findById(homeworkId).orElseThrow(HomeworkNotFoundException::new);
        User student = this.userRepository.findById(studentId).orElseThrow(UserNotFoundException::new);
        HomeworkSubmission homeworkSubmission = new HomeworkSubmission(fileName, student, homework, file);
        homework.addHomeworkSubmission(homeworkSubmission);

        this.homeworkSubmissionRepository.save(homeworkSubmission);
        this.homeworkRepository.save(homework);

        return homeworkSubmission;
    }
}
