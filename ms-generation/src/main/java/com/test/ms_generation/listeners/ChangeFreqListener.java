package com.test.ms_generation.listeners;

import com.test.ms_generation.service.DelayService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.core.Message;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class ChangeFreqListener {
    private final DelayService delayService;

    public ChangeFreqListener(DelayService delayService) {
        this.delayService = delayService;
    }

    @RabbitListener(queues = "freq-queue")
    public void changeFrequency(Message message){
        log.info("Receive messageReceive message: {}", message);
        delayService.changeDelay(Long.valueOf(new String(message.getBody())));
    }

}
