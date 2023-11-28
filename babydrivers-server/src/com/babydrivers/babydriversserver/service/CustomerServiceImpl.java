package com.babydrivers.babydriversserver.service;

import com.babydrivers.babydriversserver.entity.Customer;
import com.babydrivers.babydriversserver.repository.CustomerRepository;
import org.springframework.stereotype.Service;

@Service
public class CustomerServiceImpl {

    private final CustomerRepository customerRepository;

    public CustomerServiceImpl(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }


    public void createCustomer(Customer customer) {
        customerRepository.save(customer);
    }
}