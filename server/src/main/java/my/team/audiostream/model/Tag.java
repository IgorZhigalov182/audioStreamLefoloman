package my.team.audiostream.model;

import javax.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "tags")
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    @Column(name = "image_path")
    private String imagePath;

}