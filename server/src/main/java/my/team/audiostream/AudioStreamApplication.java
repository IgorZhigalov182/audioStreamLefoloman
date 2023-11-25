package my.team.audiostream;

import lombok.AllArgsConstructor;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@AllArgsConstructor
public class AudioStreamApplication implements ApplicationRunner {

	public static void main(String[] args) {
		SpringApplication.run(AudioStreamApplication.class, args);
	}

	@Override
	public void run(ApplicationArguments args) throws Exception {
		//networkServer.start();
	}
}
