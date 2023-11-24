package my.team.audiostream.service;

import java.util.Optional;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import my.team.audiostream.dto.ClientRegistrationDto;
import my.team.audiostream.model.Client;
import my.team.audiostream.repository.ClientRepository;
import org.springframework.dao.DataAccessException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
@Slf4j
public class SimpleClientService implements ClientService {

    private final ClientRepository clientRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public Optional<Client> save(ClientRegistrationDto regDto) {
        Optional<Client> result = Optional.empty();
        try {
            Client client = new Client();
            client.setLogin(regDto.getLogin());
            client.setPassword(passwordEncoder.encode(regDto.getPassword()));
            result = Optional.of(clientRepository.save(client));
        } catch (DataAccessException | IllegalArgumentException e) {
            log.error(e.getMessage(), e);
        }
        return result;
    }

    @Override
    public Optional<Client> findByLogin(String login) {
        return clientRepository.findByLogin(login);
    }

}