package com.babydrivers.babydriversserver.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Data
@Table(name = "reservations")
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "check_in_date")
    private LocalDate checkInDate;

    @Column(name = "check_out_date")
    private LocalDate checkOutDate;

    @Column(name = "reservation_total")
    private BigDecimal reservationTotal;

    @Column(name = "reservation_no")
    private String reservationNo;


//    @OneToOne(cascade = CascadeType.ALL) Might be inadvertently deleting rooms
//    @JoinColumn(name = "room_id", referencedColumnName = "id")

    @ManyToOne
    @JoinColumn(name = "room_id", unique = false)
    private Room room;

    //Calculate reservation total based on room price and number of days
    public void calculateReservationTotal() {
        if (checkInDate != null && checkOutDate != null && room != null) {
            long numOfDays = checkOutDate.toEpochDay() - checkInDate.toEpochDay();
            reservationTotal = room.getRoomPrice().multiply(BigDecimal.valueOf(numOfDays));
        }
    }

}
