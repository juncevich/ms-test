package com.test.msapi.controller;

import com.test.msapi.service.MessageService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
public class DelayController {

    private final MessageService messageService;

    public DelayController(MessageService messageService) {
        this.messageService = messageService;
    }


    @PostMapping(value = "/changeDelay/{delay}")
    public String changeDelay(@PathVariable("delay") String delay) {
        log.info("Changing delay to: {}", delay);
        messageService.sendChangeFrequencyRequest(delay);
        return delay;
    }
}
