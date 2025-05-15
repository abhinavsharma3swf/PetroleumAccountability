package com.bridge.example.petroleumaccountability.usermanagement.repository;

import com.bridge.example.petroleumaccountability.usermanagement.entity.UserAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository <UserAccount, Long> {
}
