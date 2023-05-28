package mk.ukim.finki.smartstudy.service;

import mk.ukim.finki.smartstudy.model.Section;

import java.util.List;

public interface SectionService {
    Section findById(Long sectionId);

    List<Section> listAll();

    List<Section> findSectionsByCourseId(Long id);

    Section delete(Long id);

    Section edit(Long id, String name);

    Section create(String name, Long courseId);
}
