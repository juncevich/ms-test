package com.test.mspersistence.listener;

import com.google.gson.Gson;
import com.test.mspersistence.domain.Result;
import com.test.mspersistence.dto.ResultDto;
import com.test.mspersistence.services.ResultService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.core.Message;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

import java.util.List;

@Slf4j
@Component
public class ResultListener {

    private final ResultService resultService;

    public ResultListener(ResultService resultService) {
        this.resultService = resultService;
    }

    @RabbitListener(queues = "generator-message-queue")
    public void receiveMessage(Message message){
        log.info("Received: {}", message);
        ResultDto resultDto = new Gson().fromJson(new String(message.getBody()), ResultDto.class);
        Result result = Result.builder().localDateTime(resultDto.getLocalDateTime()).value(resultDto.getValue()).build();
        resultService.save(result);
    }

    @RabbitListener(queues = "result-queue")
    public String returnResult(){
        List<Result> all = resultService.findAll();
        log.info("Return results: {}", all);
        return all.toString();
    }

}
