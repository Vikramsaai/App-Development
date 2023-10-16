package com.example.microservice.service.repository;


import com.example.microservice.service.entity.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
    // Custom query methods, if needed
}
