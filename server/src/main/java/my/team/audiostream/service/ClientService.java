package my.team.audiostream.service;

import java.util.Optional;
import my.team.audiostream.dto.ClientRegistrationDto;
import my.team.audiostream.model.Client;

public interface ClientService {

    Optional<Client> save(ClientRegistrationDto regDto);

    Optional<Client> findByLogin(String login);

}