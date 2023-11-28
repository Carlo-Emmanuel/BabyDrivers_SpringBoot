package com.babydrivers.babydriversserver.repository;

import com.babydrivers.babydriversserver.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepository extends JpaRepository<Reservation, Long>{
}
