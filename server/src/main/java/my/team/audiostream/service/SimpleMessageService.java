package my.team.audiostream.service;

import java.util.Collection;
import lombok.AllArgsConstructor;
import my.team.audiostream.model.Message;
import my.team.audiostream.repository.MessageRepository;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class SimpleMessageService implements MessageService {

    private final MessageRepository messageRepository;

    @Override
    public Collection<Message> findAllByRoomId(int roomId) {
        return messageRepository.findAllByRoomId(roomId);
    }

}