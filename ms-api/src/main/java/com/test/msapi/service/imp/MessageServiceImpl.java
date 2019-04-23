package com.test.msapi.service.imp;

import com.test.msapi.service.MessageService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.core.TopicExchange;
import org.springframework.amqp.rabbit.connection.CorrelationData;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Slf4j
@Service
public class MessageServiceImpl implements MessageService {

    private final RabbitTemplate rabbitTemplate;

    private final DirectExchange topic;

    public MessageServiceImpl(RabbitTemplate rabbitTemplate, DirectExchange topic) {
        this.rabbitTemplate = rabbitTemplate;
        this.topic = topic;
    }

    @Override
    public String sendGetResultRequest() {
        log.info("Try to get results in MessageService.");
        CorrelationData correlationData = new CorrelationData(UUID.randomUUID().toString());
        Object getResult = rabbitTemplate.convertSendAndReceive(topic.getName(), "getResult", "", correlationData);
//        Object getResult = rabbitTemplate.convertSendAndReceive(topic.getName(), "getResult", "");
        return String.valueOf(getResult);
    }


}
