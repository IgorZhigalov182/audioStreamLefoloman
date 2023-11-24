package my.team.audiostream.dto;

import javax.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class ClientRegistrationDto {

    @NotBlank(message = "Login must not be empty")
    private String login;

    @NotBlank(message = "Password must not be empty")
    private String password;

}