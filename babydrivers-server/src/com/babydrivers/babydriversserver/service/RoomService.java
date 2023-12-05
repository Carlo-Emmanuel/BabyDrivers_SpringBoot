package com.babydrivers.babydriversserver.service;

import com.babydrivers.babydriversserver.entity.Room;

import java.util.List;
import java.util.Optional;

public interface RoomService {
    public List<Room> getRooms();

    public Room getRoomById(Long id);
}
