package com.test.msapi.config;


import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.core.Queue;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitConfig {
    private final static String RESULT_QUEUE_NAME = "result-queue";
    private final static String FREQ_QUEUE_NAME = "freq-queue";

    private final static String RESULT_QUEUE_KEY = "getResult";
    private final static String CHANGE_FREQ_QUEUE_KEY = "changeFreq";
    
    private static final String EXCHANGE_NAME = "ms-exchange";

    @Bean
    Queue resultQueue() {
        return new Queue(RESULT_QUEUE_NAME, false);
    }

    @Bean
    Queue freqQueue() {
        return new Queue(FREQ_QUEUE_NAME, false);
    }

    @Bean
    DirectExchange exchange() {
        return new DirectExchange(EXCHANGE_NAME);
    }

    @Bean
    Binding bindingResult(Queue resultQueue, DirectExchange exchange) {
        return BindingBuilder.bind(resultQueue).to(exchange).with(RESULT_QUEUE_KEY);
    }

    @Bean
    Binding bindingChangeFreq(Queue freqQueue, DirectExchange exchange) {
        return BindingBuilder.bind(freqQueue).to(exchange).with(CHANGE_FREQ_QUEUE_KEY);
    }
}
