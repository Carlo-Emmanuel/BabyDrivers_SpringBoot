package com.babydrivers.babydriversserver.request;

import java.time.LocalDate;
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

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public LocalDate getCheckInDate() {
        return checkInDate;
    }

    public void setCheckInDate(LocalDate checkInDate) {
        this.checkInDate = checkInDate;
    }

    public LocalDate getCheckOutDate() {
        return checkOutDate;
    }

    public void setCheckOutDate(LocalDate checkOutDate) {
        this.checkOutDate = checkOutDate;
    }

    public Long getRoomId() {
        return roomId;
    }

    public void setRoomId(Long roomId) {
        this.roomId = roomId;
    }

}
