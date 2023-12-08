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
    private String roomType;
    private BigDecimal reservationTotal;
    private String reservationNo;



    public ReservationResponse(Reservation reservation) {
        //this.id = reservation.getId();
        this.firstName = reservation.getFirstName();
        this.lastName = reservation.getLastName();
        this.checkInDate = reservation.getCheckInDate();
        this.checkOutDate = reservation.getCheckOutDate();
        this.roomType = reservation.getRoom().getRoomType();
        this.reservationTotal = reservation.getReservationTotal();
        this.reservationNo = reservation.getReservationNo();
    }

    //Formats reservation details into a string for confirmation email
    public String toFormattedString() {
        return String.format("Reservation Details:\n\n" +
                        "Name: %s %s\n" +
                        "Check-In Date: %s\n" +
                        "Check-Out Date: %s\n" +
                        "Room Type: %s\n" +
                        "Total: %s\n" +
                        "Reservation Number: %s",
                        firstName, lastName, checkInDate, checkOutDate, roomType, reservationTotal, reservationNo);
    }
}
