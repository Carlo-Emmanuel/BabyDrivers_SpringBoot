package com.babydrivers.babydriversserver.controller;

import com.babydrivers.babydriversserver.entity.Reservation;
import com.babydrivers.babydriversserver.request.ReservationRequest;
import com.babydrivers.babydriversserver.service.ReservationServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/reservations")
public class ReservationController {

    @Autowired
    private ReservationServiceImpl reservationService;

    //POST endpoint to create reservation
    @PostMapping("/create")
    public ResponseEntity<Reservation> createReservation(@RequestBody ReservationRequest request){
        try{
            Reservation reservation = reservationService.createReservation(request.getFirstName(),
                                                                            request.getLastName(),
                                                                            request.getCheckInDate(),
                                                                            request.getCheckOutDate(),
                                                                            request.getRoomId());
            return ResponseEntity.ok(reservation);

        }
        catch (Exception e){
            return ResponseEntity.badRequest().build();

        }
    }

    //GET endpoint to get reservation by id
    @GetMapping("/{reservationId}")
    public ResponseEntity<Reservation> getReservationById(@PathVariable Long reservationId){
        Reservation reservation = reservationService.getReservationById(reservationId);

        if(reservation != null){
            return ResponseEntity.ok(reservation);
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }

    //PUT endpoint to edit reservation
    @PutMapping("/{reservationId}")
    public ResponseEntity<Reservation> editReservation(@PathVariable Long reservationId, @RequestBody ReservationRequest request){
        try{
//          ResponseEntity<Reservation> newReservation = reservationService.editReservation(reservationId, request);
//          return newReservation;

            //Trying out inline return statement suggested by IntelliJ
            return reservationService.editReservation(reservationId, request);
        } catch(Exception e){
            return ResponseEntity.badRequest().build();
        }
    }

    //DELETE endpoint to cancel reservation
    @DeleteMapping("/cancel/{reservationNo}")
    public ResponseEntity<String> cancelReservation(@PathVariable String reservationNo){
        try{
//            ResponseEntity<String> cancelledReservation = reservationService.cancelReservation(reservationNo);
//            return cancelledReservation;

            //Trying out inline return statement suggested by IntelliJ
            return reservationService.cancelReservation(reservationNo);
        } catch(Exception e){
            return ResponseEntity.badRequest().build();
        }
    }
}
