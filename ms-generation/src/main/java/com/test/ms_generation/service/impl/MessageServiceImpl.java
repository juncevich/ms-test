package com.test.ms_generation.service.impl;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.test.ms_generation.dto.ResultDto;
import com.test.ms_generation.service.MessageService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.core.TopicExchange;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class MessageServiceImpl implements MessageService {

    private final RabbitTemplate rabbitTemplate;

    private final TopicExchange topic;


    @Autowired
    private ObjectMapper objectMapper;

    public MessageServiceImpl(RabbitTemplate rabbitTemplate, TopicExchange topic) {
        this.rabbitTemplate = rabbitTemplate;
        this.topic = topic;
    }

    @Override
    public void send(ResultDto resultDto) {
        objectMapper.registerModule(new JavaTimeModule());
        String object = null;
        try {
            object = objectMapper.writeValueAsString(resultDto);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        log.info("Send in JSON: {}",object);
        rabbitTemplate.convertAndSend(topic.getName(), "generator-message-queue", object);
    }
}
