package com.babydrivers.babydriversserver.service;

import com.babydrivers.babydriversserver.entity.Reservation;
import com.babydrivers.babydriversserver.entity.Room;
import com.babydrivers.babydriversserver.repository.ReservationRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.ResponseEntity;

import java.time.LocalDate;
import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class ReservationServiceImplTest {

    @Mock
    private ReservationRepository reservationRepository;

    @Mock
    private RoomServiceImpl roomService;

    @InjectMocks
    private ReservationServiceImpl reservationService;

    @Test
    public void testCreateReservation() {
        //Mock construction
        String firstName = "foo";
        String lastName = "bar";
        LocalDate checkInDate = LocalDate.now();
        LocalDate checkOutDate = LocalDate.now().plusDays(2);
        Long roomId = 1L;

        Room room = new Room(roomId, "Single", null, true);
        when(roomService.getRoomById(roomId)).thenReturn(room);

        Reservation expectedReservation = new Reservation();
        expectedReservation.setFirstName(firstName);
        expectedReservation.setLastName(lastName);
        expectedReservation.setCheckInDate(checkInDate);
        expectedReservation.setCheckOutDate(checkOutDate);
        expectedReservation.setRoom(room);
        expectedReservation.setReservationNo(UUID.randomUUID().toString().substring(0, 8));

        when(reservationRepository.save(any(Reservation.class))).thenReturn(expectedReservation);

        Reservation result = reservationService.createReservation(firstName, lastName, checkInDate, checkOutDate, roomId);

        assertNotNull(result);
        assertEquals(firstName, result.getFirstName());
        assertEquals(lastName, result.getLastName());
        assertEquals(checkInDate, result.getCheckInDate());
        assertEquals(checkOutDate, result.getCheckOutDate());
        assertEquals(room, result.getRoom());
        assertNotNull(result.getReservationNo());
    }

    @Test
    public void testGenerateReservationNo() {
        RoomService roomServiceMock = mock(RoomService.class);

        ReservationServiceImpl reservationServiceImpl = new ReservationServiceImpl(null, roomServiceMock);

        reservationServiceImpl.createReservation("foo", "bar", LocalDate.now(), LocalDate.now().plusDays(2), 1L);

        verify(reservationServiceImpl, times(1)).generateReservationNo();
    }


    @Test
    public void testGetReservationById() {
        //Mock construction
        Long reservationId = 1L;
        Reservation expectedReservation = new Reservation();
        when(reservationRepository.findById(reservationId)).thenReturn(Optional.of(expectedReservation));

        Reservation result = reservationService.getReservationById(reservationId);

        //Verify
        assertNotNull(result);
        assertEquals(expectedReservation, result);
    }

    @Test
    public void testGetReservationByIdNotFound() {
        //Mock construction
        Long reservationId = 1L;
        when(reservationRepository.findById(reservationId)).thenReturn(Optional.empty());

        Reservation result = reservationService.getReservationById(reservationId);

        //Verify
        assertNull(result);
    }

    @Test
    void testCancelReservation() {
        // Mock reservation for testing
        Reservation reservation = new Reservation();
        reservation.setReservationNo("test123");

        // Mock the behavior of repository methods
        when(reservationRepository.findByReservationNo("test123")).thenReturn(reservation);
        Mockito.doNothing().when(reservationRepository).delete(reservation);

        // Invoke the method
        ResponseEntity<String> responseEntity = reservationService.cancelReservation("test123");

        //Verify
        assertEquals("Reservation test123 has been cancelled", responseEntity.getBody());
        assertEquals(200, responseEntity.getStatusCodeValue());
    }
}
