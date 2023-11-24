package com.babydrivers.babydriversserver.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;


import java.math.BigDecimal;

@Entity
@Data
@Table(name = "rooms")
@Setter
@Getter
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "room_type")
    private String roomType;

    @Column(name = "room_price")
    private BigDecimal roomPrice;

    @Column(name = "is_available")
    private boolean isAvailable = true;

    public Room(Long id, String roomType, BigDecimal roomPrice, boolean isAvailable) {
        this.id = id;
        this.roomType = roomType;
        this.roomPrice = roomPrice;
        this.isAvailable = isAvailable;
    }

    public Room(String roomType, BigDecimal roomPrice, boolean isAvailable) {
        this.roomType = roomType;
        this.roomPrice = roomPrice;
        this.isAvailable = isAvailable;
    }

    public Room() {

    }
}
