package com.babydrivers.babydriversserver.controller;

import com.babydrivers.babydriversserver.entity.User;
import com.babydrivers.babydriversserver.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private UserServiceImpl userService;

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        User storedUser = userService.findByUsername(user.getUsername());

        if (storedUser != null && storedUser.getPassword().equals(user.getPassword())) {
            return "Login successful!";
        } else {
            return "Invalid username or password";
        }
    }

//    @PostMapping("/register")
//    public String register(@RequestBody User user) {
//        //Assuming future users are not managers
//        user.setManager(false);
//
//        User createdUser = userService.create(user);
//        if (createdUser != null) {
//            return "Registration successful!";
//        } else {
//            return "Registration failed";
//        }
//    }
}
