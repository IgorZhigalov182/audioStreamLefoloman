package my.team.audiostream.model;

import java.time.LocalDateTime;
import javax.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "messages")
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String text;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @ManyToOne
    @JoinColumn(name = "client_id", foreignKey = @ForeignKey(name = "CLIENT_ID_FK"))
    private Client client;

    @Column(name = "room_id")
    private int roomId;

}