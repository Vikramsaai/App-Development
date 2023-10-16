package com.ecommerce.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ecommerce.entity.BillingDetails;
import com.ecommerce.service.BillingDetailsService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/billing-details")
public class BillingDetailsController {
    private final BillingDetailsService billingDetailsService;

    @Autowired
    public BillingDetailsController(BillingDetailsService billingDetailsService) {
        this.billingDetailsService = billingDetailsService;
    }

    @PostMapping
    public ResponseEntity<BillingDetails> createBillingDetail(@RequestBody BillingDetails billingDetails) {
        BillingDetails savedBillingDetail = billingDetailsService.save(billingDetails);
        return ResponseEntity.ok(savedBillingDetail);
    }

    @GetMapping("/{id}")
    public ResponseEntity<BillingDetails> getBillingDetailById(@PathVariable Long id) {
        Optional<BillingDetails> billingDetail = billingDetailsService.findById(id);
        return billingDetail.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<BillingDetails> updateBillingDetail(@PathVariable Long id, @RequestBody BillingDetails updatedBillingDetails) {
        if (!billingDetailsService.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        updatedBillingDetails.setId(id);
        BillingDetails savedBillingDetail = billingDetailsService.save(updatedBillingDetails);
        return ResponseEntity.ok(savedBillingDetail);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBillingDetail(@PathVariable Long id) {
        if (!billingDetailsService.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        billingDetailsService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public ResponseEntity<List<BillingDetails>> getAllBillingDetails() {
        List<BillingDetails> billingDetails = billingDetailsService.findAll();
        return ResponseEntity.ok(billingDetails);
    }
}
