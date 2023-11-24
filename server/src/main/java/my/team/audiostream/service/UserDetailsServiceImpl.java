package my.team.audiostream.service;

import java.util.Collections;
import java.util.Optional;
import lombok.AllArgsConstructor;
import my.team.audiostream.model.Client;
import my.team.audiostream.repository.ClientRepository;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {

    private final ClientRepository clientRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Client> clientOptional = clientRepository.findByLogin(username);
        if (clientOptional.isEmpty()) {
            throw new UsernameNotFoundException(username);
        }
        return new User(clientOptional.get().getLogin(), clientOptional.get().getPassword(),
                Collections.emptyList());
    }

}
