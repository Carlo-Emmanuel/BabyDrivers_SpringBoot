package com.babydrivers.babydriversserver.service;

import com.babydrivers.babydriversserver.entity.Reservation;
import com.babydrivers.babydriversserver.entity.Room;
import com.babydrivers.babydriversserver.repository.ReservationRepository;
import com.babydrivers.babydriversserver.request.ReservationRequest;
import com.babydrivers.babydriversserver.response.ReservationResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Service
public class ReservationServiceImpl implements ReservationService {


    private final ReservationRepository reservationRepository;
    private final RoomService roomService;

    @Autowired
    private EmailService emailService;

    //Not sure if we'll need this
//    @Autowired
//    public ReservationServiceImpl(ReservationRepository reservationRepository) {
//        this.reservationRepository = reservationRepository;
//    }

    @Autowired
    public ReservationServiceImpl(ReservationRepository reservationRepository, RoomService roomService) {
        this.reservationRepository = reservationRepository;
        this.roomService = roomService;
    }


    //Create reservation
    @Override
    public Reservation createReservation(String firstName,
                                     String lastName,
                                     LocalDate checkInDate,
                                     LocalDate checkOutDate,
                                     Long roomId){
        //Check if room is available
        if (!isRoomAvailable(roomId, checkInDate, checkOutDate)) {
            throw new RuntimeException("Room not available for the specified dates");
        }

        Reservation reservation = new Reservation();
        reservation.setFirstName(firstName);
        reservation.setLastName(lastName);
        reservation.setCheckInDate(checkInDate);
        reservation.setCheckOutDate(checkOutDate);

        //Generate reservation number
        String reservationNo = generateReservationNo();
        reservation.setReservationNo(reservationNo);

        //Retrieve room by id
        Room room = roomService.getRoomById(roomId);
        reservation.setRoom(room);

        //Calculate reservation total
        reservation.calculateReservationTotal();

        //Send confirmation email
        emailService.sendReservationConfirmation("kennydampresentations@gmail.com", reservation);

        return reservationRepository.save(reservation);
    }

    //Generate unique reservation number
    @Override
    public String generateReservationNo(){
        return UUID.randomUUID().toString().substring(0, 8);
    }

    //Get reservation by id
    @Override
    public Reservation getReservationById(Long reservationId){
        return reservationRepository.findById(reservationId).orElse(null);
    }

    //Get reservation by reservation number
    @Override
    public Reservation getReservationByReservationNo(String reservationNo){
        return reservationRepository.findByReservationNo(reservationNo);
    }

    //Get all reservations
    @Override
    public List<Reservation> getAllReservations(){
        return reservationRepository.findAll();
    }

    //Edit reservation
    @Override
    public ResponseEntity<Reservation> editReservation(String reservationNo, ReservationRequest request) {
        Reservation existingReservation = reservationRepository.findByReservationNo(reservationNo);

        if (existingReservation != null) {
            //Update fields based on the request
            existingReservation.setFirstName(request.getFirstName());
            existingReservation.setLastName(request.getLastName());
            existingReservation.setCheckInDate(request.getCheckInDate());
            existingReservation.setCheckOutDate(request.getCheckOutDate());

            //Retrieve room by id
            Room room = roomService.getRoomById(request.getRoomId());
            existingReservation.setRoom(room);

            //Save the updated reservation
            Reservation updatedReservation = reservationRepository.save(existingReservation);

            //Send confirmation email
            emailService.sendReservationEditConfirmation("kennydampresentations@gmail.com", updatedReservation);
            return ResponseEntity.ok(updatedReservation);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    //Cancel reservation
    @Override
    public ResponseEntity<String> cancelReservation(String reservationNo){
        Reservation reservation = reservationRepository.findByReservationNo(reservationNo);

        //If found, delete reservation with response message
        if(reservation != null){
            reservationRepository.delete(reservation);

            //Send cancellation email
            emailService.sendReservationCancellation("kennydampresentations@gmail.com", reservation);

            return ResponseEntity.ok("Reservation " + reservationNo + " has been cancelled");
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }

    @Override
    public boolean isRoomAvailable(Long roomId, LocalDate checkInDate, LocalDate checkOutDate) {
        //Check if there are any reservations that overlap with the specified dates
        List<Reservation> overlappingReservations = reservationRepository.findOverlappingReservations(roomId, checkInDate, checkOutDate);

        return overlappingReservations.isEmpty();
    }

}
