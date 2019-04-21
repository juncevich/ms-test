package com.test.mspersistence.services.impl;

import com.test.mspersistence.domain.Result;
import com.test.mspersistence.repositories.ResultRepository;
import com.test.mspersistence.services.ResultService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class ResultServiceImpl implements ResultService {

    private final ResultRepository resultRepository;

    public ResultServiceImpl(ResultRepository resultRepository) {
        this.resultRepository = resultRepository;
    }

    @Override
    public Result save(Result result) {
        Result saved = resultRepository.save(result);
        log.info("Saving result: {}", saved);
        return saved;
    }

    @Override
    public List<Result> findAll() {
        log.info("Find all");
        return resultRepository.findAll();
    }

}
