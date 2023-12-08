package com.babydrivers.babydriversserver.controller;

import com.babydrivers.babydriversserver.entity.Room;
import com.babydrivers.babydriversserver.service.RoomServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rooms")
@CrossOrigin(origins = "http://localhost:5173")
public class RoomController {

    @Autowired
    private final RoomServiceImpl roomServiceImpl;

    @Autowired
    public RoomController(RoomServiceImpl roomServiceImpl) {
        this.roomServiceImpl = roomServiceImpl;
    }

    //Endpoint to get all rooms
    @GetMapping("/all-rooms")
    public List<Room> getRooms() {
        return roomServiceImpl.getRooms();
    }

    //Endpoint to get room by id
    @GetMapping("/{roomId}")
    public ResponseEntity<Room> getRoomById(@PathVariable Long roomId) {
        Room room = roomServiceImpl.getRoomById(roomId);

        if(room != null){
            return ResponseEntity.ok(room);
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }

}
