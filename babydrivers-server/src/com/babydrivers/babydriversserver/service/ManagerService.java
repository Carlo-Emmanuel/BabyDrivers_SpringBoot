package com.babydrivers.babydriversserver.service;

import com.babydrivers.babydriversserver.entity.Manager;
import org.springframework.stereotype.Service;

@Service
public interface ManagerService {
    Manager findByUsername(String username);
}
