package iam.couture.projet.backend_atelier_couture.Controller;


import iam.couture.projet.backend_atelier_couture.entity.Mesure;
import iam.couture.projet.backend_atelier_couture.exception.RessourceNotFoundException;
import iam.couture.projet.backend_atelier_couture.repository.MesureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@SuppressWarnings("ALL")
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class MesureController {
    @Autowired
    protected MesureRepository mesureRepository;
    @GetMapping("/mesures")
    protected List<Mesure>getAllMesures(){
        return mesureRepository.findAll();
    }
   @PostMapping("/mesures")
    protected Mesure addMesure(@RequestBody Mesure mesure){
       return mesureRepository.save(mesure);
   }
   @GetMapping("/mesures/{id}")
    protected ResponseEntity<Mesure>getMesureById(@PathVariable Long id){
        Mesure mesure = mesureRepository.findById(id)
                .orElseThrow(()-> new RessourceNotFoundException("Mesure is not in with id: "+id));
       return ResponseEntity.ok(mesure);

   }
   @PutMapping("/mesures/{id}")
   protected ResponseEntity<Mesure>updateMesure(@PathVariable Long id, @RequestBody Mesure mesure){
       Mesure _mesure = mesureRepository.findById(id)
               .orElseThrow(()-> new RessourceNotFoundException("Mesure is not in with id: "+id));
       _mesure.setAvantBras(mesure.getAvantBras());
       _mesure.setBiceps(mesure.getBiceps());
       _mesure.setCheville(mesure.getCheville());
       _mesure.setCou(mesure.getCou());
       _mesure.setCoude(mesure.getCoude());
       _mesure.setClient(mesure.getClient());
       _mesure.setCuisse(mesure.getCuisse());
       _mesure.setCoutureExt(mesure.getCoutureExt());
       _mesure.setEpaule(mesure.getEpaule());
       _mesure.setEntreJambe(mesure.getEntreJambe());
       _mesure.setGenou(mesure.getGenou());
       _mesure.setHanches(mesure.getHanches());
       _mesure.setHTotale(mesure.getHTotale());
       _mesure.setLBras(mesure.getLBras());
       _mesure.setLCorps(mesure.getLCorps());
       _mesure.setPoignetCode(mesure.getPoignetCode());
       _mesure.setPoitrine(mesure.getPoitrine());
       _mesure.setTete(mesure.getTete());
       Mesure updateMesure = mesureRepository.save(_mesure);
       return ResponseEntity.ok(updateMesure);

   }
    @DeleteMapping("/mesures/{id}")
    protected ResponseEntity<Map<String, Boolean>>deleteMesure(@PathVariable Long id){
        Mesure mesure = mesureRepository.findById(id)
                .orElseThrow(()-> new RessourceNotFoundException("Mesure is not in with id: "+id));
        mesureRepository.delete(mesure);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);

    }
}
