package com.babydrivers.babydriversserver.service;

import com.babydrivers.babydriversserver.entity.Reservation;
import com.babydrivers.babydriversserver.request.ReservationRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public interface ReservationService {

    public Reservation createReservation(String firstName,
                                         String lastName,
                                         LocalDate checkInDate,
                                         LocalDate checkOutDate,
                                         Long roomId);

    public String generateReservationNo();

    public Reservation getReservationById(Long reservationId);

    public Reservation getReservationByReservationNo(String reservationNo);

    public ResponseEntity<Reservation> editReservation(String reservationNo, ReservationRequest request);

    public ResponseEntity<String> cancelReservation(String reservationNo);

    public List<Reservation> getAllReservations();

    public boolean isRoomAvailable(Long roomId, LocalDate checkInDate, LocalDate checkOutDate);

}
