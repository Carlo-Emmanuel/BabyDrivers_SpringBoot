package com.babydrivers.babydriversserver.request;

import lombok.Getter;

import java.time.LocalDate;
@Getter
public class ReservationRequest {

    private String firstName;
    private String lastName;
    private LocalDate checkInDate;
    private LocalDate checkOutDate;
    private Long roomId;

    public ReservationRequest() {
    }

    public ReservationRequest(String firstName,
                              String lastName,
                              LocalDate checkInDate,
                              LocalDate checkOutDate,
                              Long roomId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.roomId = roomId;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setCheckInDate(LocalDate checkInDate) {
        this.checkInDate = checkInDate;
    }

    public void setCheckOutDate(LocalDate checkOutDate) {
        this.checkOutDate = checkOutDate;
    }

    public void setRoomId(Long roomId) {
        this.roomId = roomId;
    }

}
