package com.ecommerce.service;



        import com.ecommerce.entity.BillingDetails;
        import com.ecommerce.entity.User;
        import com.ecommerce.repository.BillingDetailsRepository;
        import com.ecommerce.repository.UserRepository;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
        import org.springframework.stereotype.Service;

        import java.util.*;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final BillingDetailsRepository billingDetailsRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository, BillingDetailsRepository billingDetailsRepository, BCryptPasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.billingDetailsRepository = billingDetailsRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public Optional<BillingDetails> getBillingDetailsForUser(Long userId) {
        return billingDetailsRepository.findById(userId);
    }

    public User registerUser(User user) {
        // Encode the password before saving it to the database
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        // Set other necessary fields and save the user
        // ...
        return userRepository.save(user);
    }
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(Long userId) {
        return userRepository.findById(userId);
    }



    public User updateUser(User user) {
        return userRepository.save(user);
    }

    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }


}




