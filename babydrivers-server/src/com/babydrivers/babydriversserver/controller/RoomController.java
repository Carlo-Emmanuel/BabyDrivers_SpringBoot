package com.babydrivers.babydriversserver.controller;

import com.babydrivers.babydriversserver.model.Room;
import com.babydrivers.babydriversserver.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/rooms")
public class RoomController {

    private final RoomService roomService;

    @Autowired
    public RoomController(RoomService roomService) {
        this.roomService = roomService;
    }

    @GetMapping("/all-rooms")
    public List<Room> getRooms() {
        return roomService.getRooms();
    }

}
