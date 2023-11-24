package com.babydrivers.babydriversserver.config;

import com.babydrivers.babydriversserver.model.Room;
import com.babydrivers.babydriversserver.repository.RoomRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.math.BigDecimal;

@Configuration
public class RoomConfig {

//    @Bean
//    CommandLineRunner commandLineRunner(RoomRepository roomRepository) {
//        return args -> {
//            new Room(1L,"Single Bed", BigDecimal.valueOf(200), true);
//            new Room(2L,"Single Bed", BigDecimal.valueOf(200), true);
//            new Room(3L,"Double Bed", BigDecimal.valueOf(380), true);
//            new Room(4L,"Double Bed", BigDecimal.valueOf(380), true);
//            new Room(5L,"Single Suite", BigDecimal.valueOf(450), true);
//            new Room(6L,"Double Suite", BigDecimal.valueOf(800), true);
//        };
//    }
}
