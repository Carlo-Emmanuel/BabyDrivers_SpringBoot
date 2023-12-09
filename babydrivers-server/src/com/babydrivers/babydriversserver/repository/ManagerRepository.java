package com.babydrivers.babydriversserver.repository;

import com.babydrivers.babydriversserver.entity.Manager;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;

@Repository
public interface ManagerRepository extends JpaRepository<Manager, Long> {
    Manager findByUsername(String username);
}
