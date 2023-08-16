package iam.couture.projet.backend_atelier_couture.Controller;

import iam.couture.projet.backend_atelier_couture.entity.Personne;
import iam.couture.projet.backend_atelier_couture.repository.PersonneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@SuppressWarnings("ALL")
@CrossOrigin(origins = "localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class PersonneController {
    //let's inject this repository to the container
    @Autowired
    private PersonneRepository personneRepository;
    //get Peoples
    @GetMapping("/personnes")
    public List<Personne> getAllPeoples(){
        return personneRepository.findAll();
    }
}

