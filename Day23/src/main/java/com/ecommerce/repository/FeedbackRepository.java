package com.ecommerce.repository;

import com.ecommerce.entity.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
    // Custom query methods, if needed
}