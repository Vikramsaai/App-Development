package com.ecommerce.controller;



import com.ecommerce.entity.BillingDetails;
import com.ecommerce.entity.User;
        import com.ecommerce.service.UserService;
        import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
        import org.springframework.web.bind.annotation.*;


//@RestController
//@RequestMapping("/api/users")
//public class UserController {
//
//    private final UserService userService;
//
//    @Autowired
//    public UserController(UserService userService) {
//        this.userService = userService;
//    }
//
//    @PostMapping("/register")
//    public ResponseEntity<User> registerUser(@RequestBody User user) {
//        User registeredUser = userService.registerUser(user);
//        return ResponseEntity.ok(registeredUser);
//    }

//    @GetMapping("/email/{email}")
//    public ResponseEntity<User> getUserByEmail(@PathVariable String email) {
//        User user = userService.getUserByEmail(email);
//        if (user != null) {
//            return ResponseEntity.ok(user);
//        } else {
//            // Handle user not found error
//            return ResponseEntity.notFound().build();
//        }
//    }
//}

import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.web.bind.annotation.*;
        import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{userId}")
    public Optional<User> getUserById(@PathVariable Long userId) {
        return userService.getUserById(userId);
    }

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        User registeredUser = userService.registerUser(user);
        return ResponseEntity.ok(registeredUser);
    }

    @PutMapping
    public User updateUser(@RequestBody User user) {
        return userService.updateUser(user);
    }

    @DeleteMapping("/{userId}")
    public void deleteUser(@PathVariable Long userId) {
        userService.deleteUser(userId);
    }

    @GetMapping("/users/{userId}/billing-details")
    public ResponseEntity<BillingDetails> getBillingDetailsForUser(@PathVariable Long userId) {
        Optional<BillingDetails> billingDetails = userService.getBillingDetailsForUser(userId);
        return billingDetails.map(details -> new ResponseEntity<>(details, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }



}
