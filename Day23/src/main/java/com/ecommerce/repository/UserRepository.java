package com.ecommerce.repository;

import java.util.Optional;

import com.ecommerce.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.entity.User;
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String username);

//    User findbyEmail(String email);

//    User findByUid(Long uid);

    void deleteByUid(Long uid);

}