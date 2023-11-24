package com.babydrivers.babydriversserver.repository;

import com.babydrivers.babydriversserver.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {
}
