package com.babydrivers.babydriversserver.service;

import com.babydrivers.babydriversserver.entity.Reservation;
import com.babydrivers.babydriversserver.response.ReservationResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender javaMailSender;

    //Send reservation confirmation email
    public void sendReservationConfirmation(String email, Reservation reservation) {
        SimpleMailMessage message = new SimpleMailMessage();
        ReservationResponse reservationResponse = new ReservationResponse(reservation);
        message.setSubject("Reservation Confirmation");
        message.setTo(email);
        message.setText(reservationResponse.toFormattedString());

        javaMailSender.send(message);
    }
}

