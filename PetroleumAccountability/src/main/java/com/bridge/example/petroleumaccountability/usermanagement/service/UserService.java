package com.bridge.example.petroleumaccountability.usermanagement.service;
import com.bridge.example.petroleumaccountability.usermanagement.entity.UserAccount;
import com.bridge.example.petroleumaccountability.usermanagement.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserAccount createNewUserAccount(UserAccount userAccount) {
        return userRepository.save(userAccount);
    }
}