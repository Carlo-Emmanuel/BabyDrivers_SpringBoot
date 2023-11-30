package com.babydrivers.babydriversserver.controller;

import com.babydrivers.babydriversserver.entity.Customer;
import com.babydrivers.babydriversserver.service.CustomerServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/customers")
@RequiredArgsConstructor
public class CustomerController {

    private CustomerServiceImpl customerServiceImpl;

    @Autowired
    public CustomerController(CustomerServiceImpl customerServiceImpl){
        this.customerServiceImpl = customerServiceImpl;
    }

    @PostMapping("/create")
    public void createCustomer(@RequestBody Customer customer) {
         customerServiceImpl.createCustomer(customer);
    }

}
