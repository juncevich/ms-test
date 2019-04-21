package com.test.mspersistence.repositories;

import com.test.mspersistence.domain.Result;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ResultRepository extends MongoRepository<Result, String> {
}
