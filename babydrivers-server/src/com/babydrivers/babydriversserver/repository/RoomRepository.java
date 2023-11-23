package com.babydrivers.babydriversserver.repository;

import com.babydrivers.babydriversserver.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room, Long> {
}
