package my.team.audiostream.controller;

import java.util.Collection;
import lombok.AllArgsConstructor;
import my.team.audiostream.model.Room;
import my.team.audiostream.service.RoomService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class RoomController {

    private final RoomService roomService;

    @GetMapping("/rooms")
    public ResponseEntity<Collection<Room>> getAllRooms() {
        return ResponseEntity.ok(roomService.findAll());
    }

}