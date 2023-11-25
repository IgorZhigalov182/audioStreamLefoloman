package my.team.audiostream.service;

import java.util.Collection;
import lombok.AllArgsConstructor;
import my.team.audiostream.model.Tag;
import my.team.audiostream.repository.TagRepository;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class SimpleTagService implements TagService {

    private final TagRepository tagRepository;

    @Override
    public Collection<Tag> findAll() {
        return tagRepository.findAll();
    }

}