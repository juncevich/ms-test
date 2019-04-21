package com.test.ms_generation.service.impl;

import com.test.ms_generation.dto.ResultDto;
import com.test.ms_generation.service.MessageService;
import org.springframework.amqp.core.TopicExchange;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageServiceImpl implements MessageService {

    @Autowired
    private RabbitTemplate rabbitTemplate;

    @Autowired
    private TopicExchange topic;

    @Override
    public void send(ResultDto resultDto) {
        rabbitTemplate.convertAndSend(topic.getName(), "generator-message-queue", resultDto.toString());
    }
}
