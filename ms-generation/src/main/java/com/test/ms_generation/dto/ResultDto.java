package com.test.ms_generation.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class ResultDto {

    private LocalDateTime localDateTime;

    private String value;

}
