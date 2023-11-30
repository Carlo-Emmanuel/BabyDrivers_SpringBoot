package com.babydrivers.babydriversserver.service;

import com.babydrivers.babydriversserver.entity.Reservation;
import com.babydrivers.babydriversserver.entity.Room;
import com.babydrivers.babydriversserver.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.UUID;

@Service
public class ReservationServiceImpl implements ReservationService {

    @Autowired
    private final ReservationRepository reservationRepository;

    @Autowired
    private RoomServiceImpl roomServiceImpl;

    @Autowired
    public ReservationServiceImpl(ReservationRepository reservationRepository) {
        this.reservationRepository = reservationRepository;
    }

    //Create reservation
    public Reservation createReservation(String firstName,
                                     String lastName,
                                     LocalDate checkInDate,
                                     LocalDate checkOutDate,
                                     Long roomId){
        Reservation reservation = new Reservation();
        reservation.setFirstName(firstName);
        reservation.setLastName(lastName);
        reservation.setCheckInDate(checkInDate);
        reservation.setCheckOutDate(checkOutDate);

        //Generate reservation number
        String reservationNo = generateReservationNo();
        reservation.setReservationNo(reservationNo);

        //Retrieve room by id
        Room room = roomServiceImpl.getRoomById(roomId);
        reservation.setRoom(room);

        return reservationRepository.save(reservation);
    }

    //Generate unique reservation number
    private String generateReservationNo(){
        return UUID.randomUUID().toString().substring(0, 8);
    }

    //Get reservation by id
    public Reservation getReservationById(Long reservationId){
        return reservationRepository.findById(reservationId).orElse(null);
    }

}
