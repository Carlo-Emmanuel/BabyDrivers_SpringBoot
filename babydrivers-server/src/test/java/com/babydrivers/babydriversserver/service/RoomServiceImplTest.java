package com.babydrivers.babydriversserver.service;

import com.babydrivers.babydriversserver.entity.Room;
import com.babydrivers.babydriversserver.repository.RoomRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class RoomServiceImplTest {

    @Mock
    private RoomRepository roomRepository;

    @InjectMocks
    private RoomServiceImpl roomService;

    @Test
    public void testGetRooms() {
        //Mock construction
        List<Room> rooms = Arrays.asList(
                new Room(1L, "Room1", BigDecimal.valueOf(100.0), true),
                new Room(2L, "Room2", BigDecimal.valueOf(150.0), true)
        );

        when(roomRepository.findAll()).thenReturn(rooms);

        List<Room> result = roomService.getRooms();

        assertEquals(2, result.size());
        assertEquals("Room1", result.get(0).getRoomType());
        assertEquals("Room2", result.get(1).getRoomType());
        assertEquals(BigDecimal.valueOf(100.0), result.get(0).getRoomPrice());
        assertEquals(BigDecimal.valueOf(150.0), result.get(1).getRoomPrice());
        assertTrue(result.get(0).isAvailable());
        assertTrue(result.get(1).isAvailable());
    }

    @Test
    public void testGetRoomById() {
        //Mock construction
        Long roomId = 1L;
        Room room = new Room(roomId, "Room1", BigDecimal.valueOf(100.0), true);

        when(roomRepository.findById(roomId)).thenReturn(Optional.of(room));

        Room result = roomService.getRoomById(roomId);

        assertNotNull(result);
        assertEquals("Room1", result.getRoomType());
        assertEquals(BigDecimal.valueOf(100.0), result.getRoomPrice());
        assertTrue(result.isAvailable());
    }

    @Test
    public void testGetRoomByIdNotFound() {
        //Mock id
        Long roomId = 1L;
        when(roomRepository.findById(roomId)).thenReturn(Optional.empty());
        Room result = roomService.getRoomById(roomId);
        assertNull(result);
    }

}
