package com.babydrivers.babydriversserver.controller;

import com.babydrivers.babydriversserver.entity.Reservation;
import com.babydrivers.babydriversserver.exception.RoomNotAvailableException;
import com.babydrivers.babydriversserver.request.ReservationRequest;
import com.babydrivers.babydriversserver.response.ReservationResponse;
import com.babydrivers.babydriversserver.service.ReservationServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import static java.util.Arrays.stream;

@RestController
@RequestMapping("/reservations")
@CrossOrigin(origins = "http://localhost:5173")
public class ReservationController {

    @Autowired
    private ReservationServiceImpl reservationService;

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
        catch (RoomNotAvailableException e){
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
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

    //GET endpoint to get all reservations
    @GetMapping("/all")
    public ResponseEntity<List<ReservationResponse>> getAllReservations(){
        try{
            List<ReservationResponse> response = reservationService.getAllReservations()
                    .stream()
                    .map(ReservationResponse::new)
                    .collect(Collectors.toList());
            return ResponseEntity.ok(response);
        } catch(Exception e){
            return ResponseEntity.badRequest().build();
        }
    }

    //PUT endpoint to edit reservation
    @PutMapping("/{reservationNo}")
    public ResponseEntity<ReservationResponse> editReservation(@PathVariable String reservationNo, @RequestBody ReservationRequest request){
        try{

          ResponseEntity<Reservation> updatedReservation = reservationService.editReservation(reservationNo, request);

          ReservationResponse response = new ReservationResponse(Objects.requireNonNull(updatedReservation.getBody()));

          return ResponseEntity.ok(response);


        }


        catch (RoomNotAvailableException e){
        return ResponseEntity.status(HttpStatus.CONFLICT).build();
    }
        catch (Exception e) {
            //Handle other exceptions
            return ResponseEntity.badRequest().build();
        }
    }

    //DELETE endpoint to cancel reservation
    @DeleteMapping("/cancel/{reservationNo}")
    public ResponseEntity<String> cancelReservation(@PathVariable String reservationNo){
        try{
            ResponseEntity<String> cancelledReservation = reservationService.cancelReservation(reservationNo);
            return cancelledReservation;


        } catch(Exception e){
            return ResponseEntity.badRequest().build();
        }
    }

}
