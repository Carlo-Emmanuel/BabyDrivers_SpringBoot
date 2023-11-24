package com.babydrivers.babydriversserver.model;

import jakarta.persistence.*;
import lombok.Data;


import java.math.BigDecimal;

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

    @Column(name = "is_available")
    private boolean isAvailable = true;

}
