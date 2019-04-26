package com.test.msapi.service.imp;

import com.test.msapi.service.MessageService;
import com.test.msapi.service.ResultService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class ResultServiceImpl implements ResultService {

    private final MessageService messageService;

    public ResultServiceImpl(MessageService messageService) {
        this.messageService = messageService;
    }

    @Override
    public String getResults(){
        log.info("Try to get results in ResultService.");
        return messageService.sendGetResultRequest();
    }
}
