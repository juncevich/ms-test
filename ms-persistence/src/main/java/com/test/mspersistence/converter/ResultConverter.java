package com.test.mspersistence.converter;

import com.test.mspersistence.domain.Result;
import com.test.mspersistence.dto.ResultDto;

public class ResultConverter {

    public static ResultDto convertFromToDto(Result result){
        return ResultDto.builder()
                .localDateTime(result.getLocalDateTime())
                .value(result.getValue())
                .build();
    }
}
