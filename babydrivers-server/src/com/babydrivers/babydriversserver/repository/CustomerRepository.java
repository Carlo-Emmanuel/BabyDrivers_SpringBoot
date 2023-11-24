package com.babydrivers.babydriversserver.repository;

import com.babydrivers.babydriversserver.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
