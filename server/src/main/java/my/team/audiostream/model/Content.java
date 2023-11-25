package my.team.audiostream.model;

import javax.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "content")
public class Content {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    private String address;

}