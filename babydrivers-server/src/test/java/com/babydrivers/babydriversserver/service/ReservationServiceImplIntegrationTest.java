//package com.babydrivers.babydriversserver.service;
//
//import com.babydrivers.babydriversserver.entity.Reservation;
//import com.babydrivers.babydriversserver.repository.ReservationRepository;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.web.client.TestRestTemplate;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.HttpMethod;
//import org.springframework.http.ResponseEntity;
//
//import static org.junit.jupiter.api.Assertions.*;
//
//@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
//public class ReservationServiceImplIntegrationTest {
//
//    @Autowired
//    private TestRestTemplate restTemplate;
//
//    @Autowired
//    private ReservationRepository reservationRepository;
//
//    @Test
//    public void testCancelReservation() {
//        //Mock reservation for testing
//        Reservation reservation = new Reservation();
//        reservation.setReservationNo("TEST123");
//        reservationRepository.save(reservation);
//
//        //Cancel the reservation
//        ResponseEntity<String> response = restTemplate.getForEntity("/reservations/cancel/TEST123", String.class);
//
//        //Response code should be OK
//        assertEquals(HttpStatus.OK, response.getStatusCode());
//        assertEquals("Reservation TEST123 has been cancelled", response.getBody());
//
//        //Check if reservation has been deleted
//        assertNull(reservationRepository.findByReservationNo("TEST123"));
//    }
//
//
//    @Test
//    public void testCancelReservationNotFound() {
//        //Request to cancel a reservation that does not exist
//        ResponseEntity<String> response = restTemplate.getForEntity("/reservations/cancel/NONEXISTENT", String.class);
//
//        //Response code should be NOT_FOUND
//        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
//    }
//}
