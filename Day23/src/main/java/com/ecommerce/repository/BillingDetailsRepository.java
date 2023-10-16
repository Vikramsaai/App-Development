package com.ecommerce.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.ecommerce.entity.BillingDetails;

public interface BillingDetailsRepository extends JpaRepository<BillingDetails, Long> {
    // Define custom queries or methods if needed
}
