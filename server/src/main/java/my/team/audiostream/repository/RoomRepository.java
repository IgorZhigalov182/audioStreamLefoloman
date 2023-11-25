package my.team.audiostream.repository;

import java.util.Collection;
import my.team.audiostream.model.Room;
import org.springframework.data.repository.CrudRepository;

public interface RoomRepository extends CrudRepository<Room, Integer> {

    Collection<Room> findAll();

}