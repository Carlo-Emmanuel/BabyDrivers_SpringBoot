package com.babydrivers.babydriversserver.response;

import com.babydrivers.babydriversserver.entity.Reservation;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
public class ReservationResponse {
    //private Long id;
    private String firstName;
    private String lastName;
    private LocalDate checkInDate;
    private LocalDate checkOutDate;
    private BigDecimal reservationTotal;
    private String reservationNo;


    public ReservationResponse(Reservation reservation) {
        //this.id = reservation.getId();
        this.firstName = reservation.getFirstName();
        this.lastName = reservation.getLastName();
        this.checkInDate = reservation.getCheckInDate();
        this.checkOutDate = reservation.getCheckOutDate();
        this.reservationTotal = reservation.getReservationTotal();
        this.reservationNo = reservation.getReservationNo();
    }
}
