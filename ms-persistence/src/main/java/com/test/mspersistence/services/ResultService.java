package com.test.mspersistence.services;

import com.test.mspersistence.domain.Result;

import java.util.List;

public interface ResultService {
    Result save(Result result);

    List<Result> findAll();
}
