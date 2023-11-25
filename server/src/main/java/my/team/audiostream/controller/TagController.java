package my.team.audiostream.controller;

import java.util.Collection;
import lombok.AllArgsConstructor;
import my.team.audiostream.model.Tag;
import my.team.audiostream.service.TagService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class TagController {

    private final TagService tagService;

    @GetMapping("/tags")
    public ResponseEntity<Collection<Tag>> getAllTags() {
        return ResponseEntity.ok(tagService.findAll());
    }

}