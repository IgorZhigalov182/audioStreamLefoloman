package my.team.audiostream.controller;

import java.util.Optional;
import javax.validation.Valid;
import lombok.AllArgsConstructor;
import my.team.audiostream.dto.ClientRegistrationDto;
import my.team.audiostream.model.Client;
import my.team.audiostream.service.ClientService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@AllArgsConstructor
public class ClientController {

    private final ClientService clientService;

    @PostMapping("/registration")
    public ResponseEntity<Void> create(@Valid @RequestBody ClientRegistrationDto regDto) {
        Optional<Client> clientOptional = clientService.save(regDto);
        if (clientOptional.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Client with same login already exists.");
        }
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

}