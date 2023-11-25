package my.team.audiostream.service;

import java.util.Collection;
import my.team.audiostream.model.Room;

public interface RoomService {

    Collection<Room> findAll();

}