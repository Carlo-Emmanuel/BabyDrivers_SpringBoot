package com.babydrivers.babydriversserver.repository;

import com.babydrivers.babydriversserver.entity.Reservation;
import com.babydrivers.babydriversserver.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepository extends JpaRepository<Reservation, Long>{

    Reservation findByRoom(Room room);

    Reservation findByReservationNo(String reservationNo);
}
