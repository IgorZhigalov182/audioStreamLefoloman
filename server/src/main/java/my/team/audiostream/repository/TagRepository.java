package my.team.audiostream.repository;

import java.util.Collection;
import my.team.audiostream.model.Tag;
import org.springframework.data.repository.CrudRepository;

public interface TagRepository extends CrudRepository<Tag, Integer> {

    Collection<Tag> findAll();

}