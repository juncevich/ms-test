package com.test.mspersistence.listener;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jdk8.Jdk8Module;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.test.mspersistence.converter.ResultConverter;
import com.test.mspersistence.domain.Result;
import com.test.mspersistence.dto.ResultDto;
import com.test.mspersistence.services.ResultService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.core.Message;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Component
public class ResultListener {

    private final ResultService resultService;

    private final ObjectMapper objectMapper;

    public ResultListener(ResultService resultService, ObjectMapper objectMapper) {
        this.resultService = resultService;
        this.objectMapper = objectMapper;
    }

    @RabbitListener(queues = "generator-message-queue")
    public void receiveMessage(Message message) {
        log.info("Received: {}", message);
        objectMapper.registerModule(new Jdk8Module());
        objectMapper.registerModule(new JavaTimeModule());
        try {
            ResultDto resultDto = objectMapper.readValue(new String(message.getBody()), ResultDto.class);
            Result result = Result.builder().localDateTime(resultDto.getLocalDateTime()).value(resultDto.getValue()).build();
            resultService.save(result);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @RabbitListener(queues = "result-queue")
    public String returnResult() {
        List<Result> all = resultService.findAll();
        log.info("Extracted from DB: {}", all);
        List<ResultDto> resultDtoList = all.stream()
                .map(ResultConverter::convertFromToDto)
                .collect(Collectors.toList());
        log.info("Return results: {}", resultDtoList);
        try {
            return objectMapper.writeValueAsString(resultDtoList);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return "[]";
    }

}
