package com.babydrivers.babydriversserver.service;

import com.babydrivers.babydriversserver.model.Customer;
import com.babydrivers.babydriversserver.repository.CustomerRepository;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {

    private final CustomerRepository customerRepository;

    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }


    public void createCustomer(Customer customer) {
        customerRepository.save(customer);
    }
}