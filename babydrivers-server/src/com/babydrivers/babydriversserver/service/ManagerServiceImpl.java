package com.babydrivers.babydriversserver.service;

import com.babydrivers.babydriversserver.entity.Manager;
import com.babydrivers.babydriversserver.repository.ManagerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ManagerServiceImpl implements ManagerService{
    private final ManagerRepository managerRepository;

    @Autowired
    public ManagerServiceImpl(ManagerRepository managerRepository) {
        this.managerRepository = managerRepository;
    }

    //Find manager by username
    @Override
    public Manager findByUsername(String username) {
        return managerRepository.findByUsername(username);
    }
}
