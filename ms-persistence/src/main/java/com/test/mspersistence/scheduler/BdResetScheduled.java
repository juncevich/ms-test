package com.test.mspersistence.scheduler;


import com.test.mspersistence.repositories.ResultRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class BdResetScheduled {
    @Autowired
    private ResultRepository resultRepository;

    @Scheduled(fixedDelay = 10000)
    public void resetBd() {
        log.info("Clean DB");
        resultRepository.deleteAll();
    }
}
