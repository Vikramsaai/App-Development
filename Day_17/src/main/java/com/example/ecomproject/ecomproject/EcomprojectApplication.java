package com.example.ecomproject.ecomproject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class EcomprojectApplication {

	public static void main(String[] args) {
		SpringApplication.run(EcomprojectApplication.class, args);
	}

}
