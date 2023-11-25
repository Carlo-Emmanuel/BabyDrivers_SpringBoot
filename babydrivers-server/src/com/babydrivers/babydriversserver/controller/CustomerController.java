package com.babydrivers.babydriversserver.controller;

import com.babydrivers.babydriversserver.entity.Customer;
import com.babydrivers.babydriversserver.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/customers")
@RequiredArgsConstructor
public class CustomerController {

    private CustomerService customerService;

    @Autowired
    public CustomerController(CustomerService customerService){
        this.customerService = customerService;
    }

    @PostMapping("/create")
    public void createCustomer(@RequestBody Customer customer) {
         customerService.createCustomer(customer);
    }

}
