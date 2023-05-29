package mk.ukim.finki.smartstudy.service;


import mk.ukim.finki.smartstudy.model.Grade;

import java.util.List;

public interface GradeService {
    List<Grade> listAll();

    Grade findById(Long id) throws Exception;

    Grade create(Long user_id, Long course_id, int grade) throws Exception;

    Grade delete(Long id) throws Exception;

    Grade edit(Long id, int grade) throws Exception;
    List<Grade> findGradeByCourse(Long id);

//    List<Grade> findGradeByUser(Long id);
}
