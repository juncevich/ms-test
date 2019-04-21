package com.test.ms_generation;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class MsGenerationApplication {

    public static void main(String[] args) {
        SpringApplication.run(MsGenerationApplication.class, args);
    }

}
