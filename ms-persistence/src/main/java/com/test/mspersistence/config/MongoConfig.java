package com.test.mspersistence.config;

import com.mongodb.MongoClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@EnableMongoRepositories(basePackages = "com.test.mspersistence.repositories")
@Configuration
public class MongoConfig extends AbstractMongoConfiguration {

    @Override
    public String getDatabaseName() {
        return "local";
    }

    @Override
    @Bean
    public MongoClient mongoClient() {
        return new MongoClient("127.0.0.1");
    }
}
