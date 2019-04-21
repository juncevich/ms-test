package com.test.ms_generation.service.impl;

import com.test.ms_generation.service.DelayService;
import com.test.ms_generation.util.Generator;
import org.springframework.stereotype.Service;

@Service
public class DelayServiceImpl implements DelayService {

    private final Generator generator;

    public DelayServiceImpl(Generator generator) {
        this.generator = generator;
    }

    @Override
    public void changeDelay(long delay) {
        generator.generate(delay);
    }
}
