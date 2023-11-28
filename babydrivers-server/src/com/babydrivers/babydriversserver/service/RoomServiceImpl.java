package com.babydrivers.babydriversserver.service;

import com.babydrivers.babydriversserver.entity.Room;
import com.babydrivers.babydriversserver.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomServiceImpl implements RoomService {

    private final RoomRepository roomRepository;

    @Autowired
    public RoomServiceImpl(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    @Override
    public List<Room> getRooms() {
        return roomRepository.findAll();
    }
}
