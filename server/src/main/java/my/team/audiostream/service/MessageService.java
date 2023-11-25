package my.team.audiostream.service;

import java.util.Collection;
import my.team.audiostream.model.Message;

public interface MessageService {

    Collection<Message> findAllByRoomId(int roomId);

}