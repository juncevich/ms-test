package com.test.mspersistence.mappers;

import com.test.mspersistence.domain.Result;
import com.test.mspersistence.dto.ResultDto;
import org.bson.types.ObjectId;
import org.junit.Test;

import java.time.LocalDateTime;

import static org.junit.Assert.assertNotNull;

public class ResultMapperTest {


    @Test
    public void mapperTest(){
        Result result = Result.builder()
                .id(new ObjectId())
                .localDateTime(LocalDateTime.now())
                .value("test")
                .build();
        ResultDto resultDto = ResultMapper.INSTANCE.resultToResultDto(result);
        System.out.println(resultDto);
        assertNotNull(resultDto);
    }
}