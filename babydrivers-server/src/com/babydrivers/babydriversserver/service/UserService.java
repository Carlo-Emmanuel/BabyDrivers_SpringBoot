package com.babydrivers.babydriversserver.service;

import com.babydrivers.babydriversserver.entity.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    public User findByUsername(String username);

    User create(User user);
}
