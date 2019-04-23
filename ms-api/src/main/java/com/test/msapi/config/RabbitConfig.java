package com.test.msapi.config;


import org.springframework.amqp.core.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitConfig {
    private final static String QUEUE_NAME = "result-queue";
    private final static String QUEUE_KEY = "getResult";
    private static final String EXCHANGE_NAME = "ms-exchange1";

    @Bean
    Queue rabbitQueue() {
        return new Queue(QUEUE_NAME, false);
    }

    @Bean
    DirectExchange exchange() {
        return new DirectExchange(EXCHANGE_NAME);
    }

    @Bean
    Binding binding(Queue queue, DirectExchange exchange) {
        return BindingBuilder.bind(queue).to(exchange).with(QUEUE_KEY);
    }
}
