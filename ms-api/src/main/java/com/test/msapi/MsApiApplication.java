package com.test.msapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class MsApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(MsApiApplication.class, args);
    }

}
