package com.ecommerce.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ecommerce.entity.BillingDetails;
import com.ecommerce.repository.BillingDetailsRepository;

import java.util.List;
import java.util.Optional;

@Service
public class BillingDetailsService {
    private final BillingDetailsRepository billingDetailsRepository;

    @Autowired
    public BillingDetailsService(BillingDetailsRepository billingDetailsRepository) {
        this.billingDetailsRepository = billingDetailsRepository;
    }

    public BillingDetails save(BillingDetails billingDetails) {
        return billingDetailsRepository.save(billingDetails);
    }

    public Optional<BillingDetails> findById(Long id) {
        return billingDetailsRepository.findById(id);
    }

    public boolean existsById(Long id) {
        return billingDetailsRepository.existsById(id);
    }

    public void deleteById(Long id) {
        billingDetailsRepository.deleteById(id);
    }

    public List<BillingDetails> findAll() {
        return billingDetailsRepository.findAll();
    }
}
