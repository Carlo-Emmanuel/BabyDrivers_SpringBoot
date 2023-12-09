package com.babydrivers.babydriversserver.repository;

import com.babydrivers.babydriversserver.entity.Reservation;
import com.babydrivers.babydriversserver.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long>{

    Reservation findByRoom(Room room);

    Reservation findByReservationNo(String reservationNo);

    List<Reservation> findAll();

    @Query("SELECT r FROM Reservation r WHERE r.room.id = :roomId AND " +
            "(:checkInDate < r.checkOutDate OR :checkOutDate > r.checkInDate)")
    List<Reservation> findOverlappingReservations(@Param("roomId") Long roomId,
                                                  @Param("checkInDate") LocalDate checkInDate,
                                                  @Param("checkOutDate") LocalDate checkOutDate);

}
