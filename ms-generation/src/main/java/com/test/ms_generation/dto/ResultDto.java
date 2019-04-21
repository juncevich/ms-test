package com.test.ms_generation.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.gson.Gson;
import lombok.Builder;
import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@Builder
public class ResultDto {
    @JsonProperty("localDateTime")
    private LocalDateTime localDateTime;

    @JsonProperty("value")
    private String value;

    @Override
    public String toString() {
        return new Gson().toJson(this);
    }
}
