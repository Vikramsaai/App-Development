package com.ecommerce.controller;
import com.ecommerce.entity.Feedback;
import com.ecommerce.service.FeedbackService;
import jakarta.persistence.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/feedback")
public class FeedbackController {
    @Autowired
    private FeedbackService ss;
    public FeedbackController(FeedbackService feedbackService)
    {
        this.ss=feedbackService;
    }

    @PostMapping("/postfeed")
    public ResponseEntity<String> addFeedback(@RequestBody Feedback feedback) {
        ss.addFeedback(feedback);
        return ResponseEntity.ok().build();
    }


    @GetMapping("/getfeed")
    public ResponseEntity<List<Feedback>> getAllFeedback() {
        List<Feedback> feedbacks = ss.getAllFeedback();
        return ResponseEntity.ok(feedbacks);
    }

}