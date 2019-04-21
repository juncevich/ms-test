package com.test.ms_generation.util;

import com.test.ms_generation.dto.ResultDto;
import com.test.ms_generation.service.MessageService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.concurrent.ThreadPoolTaskScheduler;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.time.LocalDateTime;
import java.util.UUID;

@Slf4j
@Component
public class Generator {

    private final ThreadPoolTaskScheduler taskScheduler;
    private final MessageService messageService;

    public Generator(ThreadPoolTaskScheduler taskScheduler, MessageService messageService) {
        this.taskScheduler = taskScheduler;
        this.messageService = messageService;
    }

    @PostConstruct
    void init() {
        generate(5000);
    }

    public void generate(long delay) {

        Runnable runnable = () -> {
            ResultDto result = generateResult();
            log.info("Generate DTO: {}", result);
            messageService.send(result);
        };
        taskScheduler.shutdown();
        taskScheduler.initialize();
        taskScheduler.scheduleWithFixedDelay(runnable, delay);
    }


    private ResultDto generateResult() {
        return ResultDto.builder()
                .localDateTime(LocalDateTime.now())
                .value(UUID.randomUUID().toString()).build();
    }
}
