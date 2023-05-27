package mk.ukim.finki.smartstudy.web.controllers;


import mk.ukim.finki.smartstudy.model.Material;
import mk.ukim.finki.smartstudy.service.MaterialService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/material")
public class MaterialRestController {

    final private MaterialService materialService;

    public MaterialRestController(MaterialService materialService) {
        this.materialService = materialService;
    }


    @GetMapping("/listAll")
    public List<Material> listAll(){
        return materialService.listAll();
    }

    @GetMapping("/findMaterialsBySectionId/{id}")
    public List<Material> findMaterialsBySectionId(@PathVariable Long id){
        return this.materialService.findMaterialsBySectionId(id);
    }

    @GetMapping("/findById/{id}")
    public Material findById(@PathVariable Long id){
        return materialService.findById(id);
    }
    @PostMapping("/create")
    public Material create(
            @RequestParam String name,
            @RequestPart MultipartFile file,
            @RequestParam Long sectionId) throws IOException {
        return this.materialService.create(name, file, sectionId);
    }

    @PostMapping("/edit/{id}")
    public Material edit(
            @PathVariable Long id,
            @RequestParam String name,
            @RequestPart MultipartFile file) throws IOException {
        return this.materialService.edit(id, name, file);
    }

    @PostMapping("/delete/{id}")
    public Material create(@PathVariable Long id) throws IOException {
        return this.materialService.delete(id);
    }

}
