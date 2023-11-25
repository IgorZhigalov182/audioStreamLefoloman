package my.team.audiostream.repository;

import my.team.audiostream.model.Message;
import org.springframework.data.repository.CrudRepository;

public interface MessageRepository extends CrudRepository<Message, Integer> { }