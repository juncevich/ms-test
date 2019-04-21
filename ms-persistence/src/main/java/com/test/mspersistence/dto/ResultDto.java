package com.test.mspersistence.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ResultDto implements Serializable {
    @JsonProperty("localDateTime")
    private LocalDateTime localDateTime;
    @JsonProperty("value")
    private String value;


}
