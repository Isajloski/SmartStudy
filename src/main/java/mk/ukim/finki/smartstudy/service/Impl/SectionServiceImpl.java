package mk.ukim.finki.smartstudy.service.Impl;

import mk.ukim.finki.smartstudy.exceptions.ExampleException;
import mk.ukim.finki.smartstudy.model.Section;
import mk.ukim.finki.smartstudy.repository.SectionRepository;
import mk.ukim.finki.smartstudy.service.SectionService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SectionServiceImpl implements SectionService {
    private final SectionRepository sectionRepository;

    public SectionServiceImpl(SectionRepository sectionRepository) {
        this.sectionRepository = sectionRepository;
    }

    public List<Section> listAll() {
        return sectionRepository.findAll();
    }

    @Override
    public Section findById(Long sectionId) {
        return this.sectionRepository.findById(sectionId).orElseThrow(ExampleException::new);
    }
}
