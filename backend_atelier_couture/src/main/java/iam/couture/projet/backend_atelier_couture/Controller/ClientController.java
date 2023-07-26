package iam.couture.projet.backend_atelier_couture.Controller;

import iam.couture.projet.backend_atelier_couture.entity.Client;
import iam.couture.projet.backend_atelier_couture.exception.RessourceNotFoundException;
import iam.couture.projet.backend_atelier_couture.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@SuppressWarnings("ALL")
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class ClientController {
    @Autowired
    private ClientRepository clientRepository;
    @GetMapping("/clients")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public List<Client>getAllClient(){
        return clientRepository.findAll();
    }
    //create a client
    @PostMapping("/clients")
    public Client addClient(@RequestBody Client client){
        return clientRepository.save(client);
    }
    //get a client
    @GetMapping("clients/{id}")
    public ResponseEntity<Client> getClientById(@PathVariable Long id)
    {
        Client client = clientRepository.findById(id)
        .orElseThrow(()-> new RessourceNotFoundException("Client is not in with id: "+id));
        return ResponseEntity.ok(client);

    }
    //update client
    @PutMapping("clients/{id}")
    public ResponseEntity<Client> updateClient(@PathVariable Long id,@RequestBody Client client){
        Client _client = clientRepository.findById(id)
                .orElseThrow(()-> new RessourceNotFoundException("Client is not in with id: "+id));
        _client.setNom(client.getNom());
        _client.setPrenom(client.getPrenom());
        _client.setPhone(client.getPhone());
        _client.setEmail(client.getEmail());
        _client.setAdresse(client.getAdresse());
        _client.setCni(client.getCni());
        _client.setSexe(client.getSexe());
        _client.setStatus(client.getStatus());
        Client update_client = clientRepository.save(_client);
        return ResponseEntity.ok(update_client);

    }
    @DeleteMapping("clients/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteClient(@PathVariable Long id){
        Client _client = clientRepository.findById(id)
                .orElseThrow(()-> new RessourceNotFoundException("Client is not in with id: "+id));
        clientRepository.delete(_client);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
