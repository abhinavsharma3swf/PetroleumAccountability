package com.bridge.example.petroleumaccountability.usermanagement.service;

import com.bridge.example.petroleumaccountability.usermanagement.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import com.bridge.example.petroleumaccountability.usermanagement.entity.UserAccount;


public class UserServiceTest {
    @Mock
    UserRepository userRepository;

    @InjectMocks
    UserService userService;

    @Test
    void shouldCreateNewUserAccount(){
        UserAccount userAccount;
        userAccount = new UserAccount ("John", "Doe", "Rank", "email", "password");
        MockitoAnnotations.openMocks(this);
        when(userRepository.save(userAccount)).thenReturn(userAccount);
        UserAccount actualUser = userService.createNewUserAccount(userAccount);
        verify(userRepository,times(1)).save((any(UserAccount.class)));
        assertThat(actualUser).isEqualTo(userAccount);
    }
}
