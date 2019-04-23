package com.test.ms_generation.service.impl;

import com.test.ms_generation.dto.ResultDto;
import com.test.ms_generation.service.MessageService;
import org.springframework.amqp.core.TopicExchange;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Service;

@Service
public class MessageServiceImpl implements MessageService {

    private final RabbitTemplate rabbitTemplate;

    private final TopicExchange topic;

    public MessageServiceImpl(RabbitTemplate rabbitTemplate, TopicExchange topic) {
        this.rabbitTemplate = rabbitTemplate;
        this.topic = topic;
    }

    @Override
    public void send(ResultDto resultDto) {
        rabbitTemplate.convertAndSend(topic.getName(), "generator-message-queue", resultDto.toString());
    }
}
