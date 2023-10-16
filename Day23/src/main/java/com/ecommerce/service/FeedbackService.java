package com.ecommerce.service;
import com.ecommerce.entity.Feedback;
import com.ecommerce.repository.FeedbackRepoInt;
import jakarta.persistence.*;
import org.springframework.http.HttpMethod;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;
import java.util.List;

@Service
public class FeedbackService {
    @Autowired
    FeedbackRepoInt repoint;

    private final RestTemplate restTemplate;

    public FeedbackService() {
        this.restTemplate = new RestTemplate();
    }

    public List<Feedback> getAllFeedback() {
        ResponseEntity<List<Feedback>> response = restTemplate.exchange(
                "http://localhost:8081/api/feedback/getAll",
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<List<Feedback>>() {}
        );

        if (response.getStatusCode() == HttpStatus.OK) {
            return response.getBody();
        } else {
            // Handle error or return an empty list
            return Collections.emptyList();
        }
    }

    public Feedback addFeedback(Feedback review) {
        ResponseEntity<Feedback> response = restTemplate.exchange(
                "http://localhost:8081/api/feedback",
                HttpMethod.POST,
                new HttpEntity<>(review),
                Feedback.class

        );

        if (response.getStatusCode() == HttpStatus.CREATED) {
            return response.getBody();
        } else {
            // Handle error or return null
            return null;
        }
    }
}