package com.babydrivers.babydriversserver.repository;

import com.babydrivers.babydriversserver.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {
}
