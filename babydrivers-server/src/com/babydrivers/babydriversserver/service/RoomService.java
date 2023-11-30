package com.babydrivers.babydriversserver.service;

import com.babydrivers.babydriversserver.entity.Room;
import com.babydrivers.babydriversserver.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomService implements IRoomService {

    RoomRepository roomRepository;

    @Autowired
    public RoomService(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }
    public List<Room> getRooms() {
        return roomRepository.findAll();
    }
}
