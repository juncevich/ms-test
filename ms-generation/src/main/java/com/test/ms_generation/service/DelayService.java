package com.test.ms_generation.service;

import org.springframework.stereotype.Service;

@Service
public interface DelayService {
    void changeDelay(long delay);
}
