package com.test.ms_generation.controller;

import com.test.ms_generation.service.DelayService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@CrossOrigin("http://localhost:4200")
@RestController
public class DelayController {

    private final DelayService delayService;

    public DelayController(DelayService delayService) {
        this.delayService = delayService;
    }


    @PostMapping(value = "/changeDelay/{delay}")
    public String changeDelay(@PathVariable("delay") String delay) {
        log.info("Changing delay to: {}", delay);
        delayService.changeDelay(Long.valueOf(delay));
        return delay;
    }
}
