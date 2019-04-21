package com.test.ms_generation.controller;

import com.test.ms_generation.service.DelayService;
import com.test.ms_generation.util.Generator;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@Slf4j
public class DelayController {

    @Autowired
    private DelayService delayService;



    @RequestMapping(value = "/changeDelay/{delay}", method = RequestMethod.POST)
    @ResponseBody
    public String changeDelay(@PathVariable("delay") String delay) {
        log.info("Changing delay to: {}", delay);
        delayService.changeDelay(Long.valueOf(delay));
        return delay;
    }
}
