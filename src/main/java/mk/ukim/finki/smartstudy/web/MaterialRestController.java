package mk.ukim.finki.smartstudy.web;


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

    //        formData.append('sectionId', id);
    //        formData.append('name', name);
    //        formData.append('file', file);

    @PostMapping("/create")
    public Material create(
            @RequestParam String name,
            @RequestPart MultipartFile file,
            @RequestParam Long sectionId) throws IOException {
        return this.materialService.create(name, file, sectionId);
    }

}
