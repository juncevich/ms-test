package com.test.mspersistence;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class MsPersistenceApplication {

    public static void main(String[] args) {
        SpringApplication.run(MsPersistenceApplication.class, args);
    }

}
