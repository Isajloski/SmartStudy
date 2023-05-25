package mk.ukim.finki.smartstudy.service;

import mk.ukim.finki.smartstudy.model.Material;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface MaterialService {

    Material create(String name, MultipartFile file, Long id) throws IOException;
    Material findById(Long id);
    List<Material> listAll();
}
