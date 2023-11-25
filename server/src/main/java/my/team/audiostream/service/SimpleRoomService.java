package my.team.audiostream.service;

import java.util.Collection;
import lombok.AllArgsConstructor;
import my.team.audiostream.model.Room;
import my.team.audiostream.repository.RoomRepository;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class SimpleRoomService implements RoomService {

    private final RoomRepository roomRepository;

    @Override
    public Collection<Room> findAll() {
        return roomRepository.findAll();
    }

}