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
    private static final String RESULT_EXCHANGE_NAME = "result-exchange";

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
    DirectExchange exchangeResult() {
        return new DirectExchange(RESULT_EXCHANGE_NAME);
    }

    @Bean
    Binding bindingResult(Queue resultQueue, DirectExchange exchangeResult) {
        return BindingBuilder.bind(resultQueue).to(exchangeResult).with(RESULT_QUEUE_KEY);
    }

    @Bean
    Binding bindingChangeFreq(Queue freqQueue, DirectExchange exchange) {
        return BindingBuilder.bind(freqQueue).to(exchange).with(CHANGE_FREQ_QUEUE_KEY);
    }
}
