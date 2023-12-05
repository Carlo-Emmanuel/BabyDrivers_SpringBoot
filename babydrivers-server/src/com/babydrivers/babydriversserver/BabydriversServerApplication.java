package com.babydrivers.babydriversserver;

import com.babydrivers.babydriversserver.entity.Room;
import com.babydrivers.babydriversserver.repository.RoomRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.math.BigDecimal;

@SpringBootApplication
public class BabydriversServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(BabydriversServerApplication.class, args);
    }

    @Bean
    CommandLineRunner commandLineRunner(RoomRepository roomRepository) {
        return args -> {
//            roomRepository.save(new Room(1L,"Single Bed",
//                            BigDecimal.valueOf(200), true));
//            roomRepository.save(new Room(2L,"Single Bed",
//                            BigDecimal.valueOf(200), true));
//            roomRepository.save(new Room(3L,"Double Bed",
//                            BigDecimal.valueOf(380), true));
//            roomRepository.save(new Room(4L,"Double Bed",
//                            BigDecimal.valueOf(380), true));
            roomRepository.save(new Room(10L,"Single Suite",
                            BigDecimal.valueOf(450), true));
            roomRepository.save(new Room(11L,"Double Suite",
                            BigDecimal.valueOf(800), true));
        };
    }

}
