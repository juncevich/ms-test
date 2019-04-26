package com.test.msapi.service.imp;

import com.test.msapi.service.MessageService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.connection.CorrelationData;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Slf4j
@Service
public class MessageServiceImpl implements MessageService {

    private final RabbitTemplate rabbitTemplate;


    public MessageServiceImpl(RabbitTemplate rabbitTemplate) {
        this.rabbitTemplate = rabbitTemplate;
    }

    @Override
    public String sendGetResultRequest() {
        log.info("Try to get results in MessageService.");
        CorrelationData correlationData = new CorrelationData(UUID.randomUUID().toString());
        Object getResult = rabbitTemplate.convertSendAndReceive("ms-exchange", "getResult",
                "", correlationData);
        return String.valueOf(getResult);
    }

    @Override
    public String sendChangeFrequencyRequest(String freq) {
        log.info("Try change frequency to {} ms", freq);
        rabbitTemplate.convertAndSend("ms-exchange", "changeFreq", freq);
        return null;
    }


}
