package com.babydrivers.babydriversserver.controller;

import com.babydrivers.babydriversserver.entity.Reservation;
import com.babydrivers.babydriversserver.request.ReservationRequest;
import com.babydrivers.babydriversserver.response.ReservationResponse;
import com.babydrivers.babydriversserver.service.ReservationServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/reservations")
@CrossOrigin(origins = "http://localhost:5173")
public class ReservationController {

    @Autowired
    private ReservationServiceImpl reservationService;

    //TODO: add endpoint to get all reservations


    //POST endpoint to create reservation
    @PostMapping("/create")
    public ResponseEntity<ReservationResponse> createReservation(@RequestBody ReservationRequest request){
        try{
            Reservation reservation = reservationService.createReservation(request.getFirstName(),
                                                                            request.getLastName(),
                                                                            request.getCheckInDate(),
                                                                            request.getCheckOutDate(),
                                                                            request.getRoomId());

   //         reservation.setReservationTotal(reservation.getReservationTotal());
            ReservationResponse response = new ReservationResponse(reservation);
            return ResponseEntity.ok(response);

        }
        catch (Exception e){
            return ResponseEntity.badRequest().build();

        }
    }

    //GET endpoint to get reservation by id
    @GetMapping("/{reservationNo}")
    public ResponseEntity<ReservationResponse> getReservationById(@PathVariable String reservationNo){
        Reservation reservation = reservationService.getReservationByReservationNo(reservationNo);

        if(reservation != null){
            ReservationResponse response = new ReservationResponse(reservation);
            return ResponseEntity.ok(response);
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }

    //PUT endpoint to edit reservation
    @PutMapping("/{reservationNo}")
    public ResponseEntity<Reservation> editReservation(@PathVariable String reservationNo, @RequestBody ReservationRequest request){
        try{

          ResponseEntity<Reservation> updatedReservation = reservationService.editReservation(reservationNo, request);
          return updatedReservation;

            //Trying out inline return statement suggested by IntelliJ
//            return reservationService.editReservation(reservationId, request);
        } catch(Exception e){
            return ResponseEntity.badRequest().build();
        }
    }

    //DELETE endpoint to cancel reservation
    @DeleteMapping("/cancel/{reservationNo}")
    public ResponseEntity<String> cancelReservation(@PathVariable String reservationNo){
        try{
            ResponseEntity<String> cancelledReservation = reservationService.cancelReservation(reservationNo);
            return cancelledReservation;

            //Trying out inline return statement suggested by IntelliJ
//            return reservationService.cancelReservation(reservationNo);
        } catch(Exception e){
            return ResponseEntity.badRequest().build();
        }
    }
}
