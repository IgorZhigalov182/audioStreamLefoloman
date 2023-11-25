package my.team.audiostream.service;

import java.util.Collection;
import my.team.audiostream.model.Tag;

public interface TagService {

    Collection<Tag> findAll();

}