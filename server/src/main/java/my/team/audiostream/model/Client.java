package my.team.audiostream.model;

import java.util.Set;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import lombok.Data;

@Entity
@Data
@Table(name = "clients")
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotBlank(message = "Login must not be empty")
    private String login;

    @NotBlank(message = "Password must not be empty")
    private String password;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "clients_tags",
            joinColumns = { @JoinColumn(name = "client_id") },
            inverseJoinColumns = { @JoinColumn(name = "tag_id") }
    )
    private Set<Tag> tags;

}