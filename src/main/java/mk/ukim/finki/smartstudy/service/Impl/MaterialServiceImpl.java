package mk.ukim.finki.smartstudy.service.Impl;

import mk.ukim.finki.smartstudy.exceptions.ExampleException;
import mk.ukim.finki.smartstudy.model.Material;
import mk.ukim.finki.smartstudy.model.Section;
import mk.ukim.finki.smartstudy.repository.MaterialRepository;
import mk.ukim.finki.smartstudy.service.MaterialService;
import mk.ukim.finki.smartstudy.service.SectionService;
import org.hibernate.Hibernate;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class MaterialServiceImpl implements MaterialService {
    final private MaterialRepository materialRepository;
    final private SectionService sectionService;


    public MaterialServiceImpl(MaterialRepository materialRepository, SectionService sectionService) {
        this.materialRepository = materialRepository;
        this.sectionService = sectionService;
    }
//
//    @Override
//    public Material create(String title, String name, MultipartFile file) throws IOException {
//
//        Material material = new Material(title, name, file);
//        return this.materialRepository.save(material);
//    }
//    @Override

//      WORKS
//    public Material create(String name,  MultipartFile file, Long sectionId) throws IOException {
//        Section section = sectionService.findById(sectionId);
//        Hibernate.initialize(section);
//
//        Material material = new Material(name, file, section);
//
//        return this.materialRepository.save(material);
//    }

    @Override
    public Material create(String name,  MultipartFile file, Long sectionId) throws IOException {
        Section section = sectionService.findById(sectionId);
        Material material = new Material(name, file, section);
        material.setSection(section);
        section.getMaterials().add(material);
        return this.materialRepository.save(material);
    }

    @Override
    public Material findById(Long id) {
        return this.materialRepository.findById(id).orElseThrow(ExampleException::new);
    }
    @Override
    public List<Material> listAll() {
        return this.materialRepository.findAll();
    }




}
