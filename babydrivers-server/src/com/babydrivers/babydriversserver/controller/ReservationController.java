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

    @PostMapping
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
}
