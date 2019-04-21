package com.test.mspersistence.listener;

import com.google.gson.Gson;
import com.netflix.discovery.converters.Auto;
import com.test.mspersistence.domain.Result;
import com.test.mspersistence.dto.ResultDto;
import com.test.mspersistence.services.ResultService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.amqp.core.Message;

@Slf4j
@Component
public class ResultListener {

    @Autowired
    private ResultService resultService;

    @RabbitListener(queues = "#{rabbitQueue.name}")
    public void receiveMessage(Message message){
        log.info("Received: {}", message);
        ResultDto resultDto = new Gson().fromJson(new String(message.getBody()), ResultDto.class);
        Result result = Result.builder().localDateTime(resultDto.getLocalDateTime()).value(resultDto.getValue()).build();
        resultService.save(result);
    }

//    @RabbitListener(queues = "#{rabbitQueue.name}")
//    public void receiveMessage(Message resultDto){
//        log.info("Received: {}", resultDto);
////        ResultDto resultDto = new Gson().fromJson(message.getBody().toString(), ResultDto.class);
////        Result result = Result.builder().localDateTime(resultDto.getLocalDateTime()).value(resultDto.getValue()).build();
////        resultService.save(result);
//    }
}
