package com.babydrivers.babydriversserver.repository;

import com.babydrivers.babydriversserver.entity.Reservation;
import com.babydrivers.babydriversserver.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long>{

    Reservation findByRoom(Room room);

    Reservation findByReservationNo(String reservationNo);

    List<Reservation> findAll();
}
