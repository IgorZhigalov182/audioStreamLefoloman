package my.team.audiostream.repository;

import java.util.Optional;
import my.team.audiostream.model.Client;
import org.springframework.data.repository.CrudRepository;

public interface ClientRepository extends CrudRepository<Client, Integer> {

    Optional<Client> findByLogin(String login);

}