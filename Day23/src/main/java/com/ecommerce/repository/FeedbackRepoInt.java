package com.ecommerce.repository;

import com.ecommerce.entity.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedbackRepoInt extends JpaRepository<Feedback,Integer>{

        }
