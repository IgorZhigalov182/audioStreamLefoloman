package my.team.audiostream.model;

import java.util.Set;
import javax.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "rooms")
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    private String description;

    @OneToOne
    @JoinColumn(name = "moderator_id", foreignKey = @ForeignKey(name = "MODERATOR_ID_FK"))
    private Client moderator;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "rooms_tags",
            joinColumns = { @JoinColumn(name = "room_id") },
            inverseJoinColumns = { @JoinColumn(name = "tag_id") }
    )
    private Set<Tag> tags;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "room_id")
    private Set<Content> content;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "room_id")
    private Set<Message> messages;

}