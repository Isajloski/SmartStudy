package mk.ukim.finki.smartstudy.service;

import mk.ukim.finki.smartstudy.model.Section;

import java.util.List;

public interface SectionService {
    Section findById(Long sectionId);

    List<Section> listAll();

}
