package com.babydrivers.babydriversserver.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "managers")
public class Manager {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;
}

