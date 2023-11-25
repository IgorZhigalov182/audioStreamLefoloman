package my.team.audiostream.repository;

import my.team.audiostream.model.Content;
import org.springframework.data.repository.CrudRepository;

public interface ContentRepository extends CrudRepository<Content, Integer> { }