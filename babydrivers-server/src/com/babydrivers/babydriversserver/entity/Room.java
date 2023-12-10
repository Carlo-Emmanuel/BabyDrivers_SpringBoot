package com.babydrivers.babydriversserver.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;


import java.math.BigDecimal;
import java.util.List;

@Entity
@Data
@Table(name = "rooms")
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "room_type")
    private String roomType;

    @Column(name = "room_price")
    private BigDecimal roomPrice;

    @OneToMany(mappedBy = "room")
    private List<Reservation> reservations;

//    @Column(name = "is_available")
//    private boolean isAvailable = true;

    public Room(Long id, String roomType, BigDecimal roomPrice, boolean isAvailable) {
        this.id = id;
        this.roomType = roomType;
        this.roomPrice = roomPrice;
//
    }

    public Room(String roomType, BigDecimal roomPrice, boolean isAvailable) {
        this.roomType = roomType;
        this.roomPrice = roomPrice;
//
    }

    public Room() {

    }
}
