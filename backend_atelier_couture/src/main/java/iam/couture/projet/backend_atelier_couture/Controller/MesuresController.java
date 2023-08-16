package iam.couture.projet.backend_atelier_couture.Controller;


import iam.couture.projet.backend_atelier_couture.entity.MesureFemme;

import iam.couture.projet.backend_atelier_couture.exception.RessourceNotFoundException;
import iam.couture.projet.backend_atelier_couture.repository.MesuresRepository;
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
public class MesuresController {
    @Autowired
    protected MesuresRepository mesureRepository;
    @GetMapping("/mesures")
    protected List<MesureFemme>getAllMesures(){
        return mesureRepository.findAll();
    }
   @PostMapping("/mesures")
   protected MesureFemme addMesure(@RequestBody MesureFemme mesure) {

       return mesureRepository.save(mesure);
   }
   @GetMapping("/mesures/{id}")
    protected ResponseEntity<MesureFemme>getMesureById(@PathVariable Long id){
        MesureFemme mesure = mesureRepository.findById(id)
                .orElseThrow(()-> new RessourceNotFoundException("Mesure is not in with id: "+id));
       return ResponseEntity.ok(mesure);

   }
   @PutMapping("/mesures/{id}")
   protected ResponseEntity<MesureFemme>updateMesure(@PathVariable Long id, @RequestBody MesureFemme mesure){
       MesureFemme _mesure = mesureRepository.findById(id)
               .orElseThrow(()-> new RessourceNotFoundException("Mesure is not in with id: "+id));
       // i want to check if he wants to update data of the subclass attribut hope it works
       if(_mesure instanceof MesureFemme && mesure instanceof  MesureFemme)
       {
           MesureFemme _mesureF = (MesureFemme) _mesure;
           MesureFemme mesureF = (MesureFemme) mesure;
           _mesureF.setCreteIliaques(mesureF.getCreteIliaques());
           _mesureF.setDessousPoids(mesureF.getDessousPoids());
           _mesureF.setLdos(mesureF.getLdos());

       }
       _mesure.setAvantBras(mesure.getAvantBras());
       _mesure.setBiceps(mesure.getBiceps());
       _mesure.setCheville(mesure.getCheville());
       _mesure.setCou(mesure.getCou());
       _mesure.setCoude(mesure.getCoude());
       _mesure.setClient(mesure.getClient());
       _mesure.setCuisse(mesure.getCuisse());
       _mesure.setCoutureExt(mesure.getCoutureExt());
       _mesure.setEpaules(mesure.getEpaules());
       _mesure.setEntreJambes(mesure.getEntreJambes());
       _mesure.setGenou(mesure.getGenou());
       _mesure.setHanches(mesure.getHanches());
       _mesure.setHtotale(mesure.getHtotale());
       _mesure.setLbras(mesure.getLbras());
       _mesure.setLcorps(mesure.getLcorps());
       _mesure.setPoignet(mesure.getPoignet());
       _mesure.setPoitrine(mesure.getPoitrine());
       _mesure.setTete(mesure.getTete());
       MesureFemme updateMesure = mesureRepository.save(_mesure);
       return ResponseEntity.ok(updateMesure);

   }
    @DeleteMapping("/mesures/{id}")
    protected ResponseEntity<Map<String, Boolean>>deleteMesure(@PathVariable Long id){
        MesureFemme mesure = mesureRepository.findById(id)
                .orElseThrow(()-> new RessourceNotFoundException("Mesure is not in with id: "+id));
        mesureRepository.delete(mesure);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);

    }
}
