package com.test.mspersistence.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.gson.Gson;
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
//    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime localDateTime;
//    @JsonProperty("value")
    private String value;

//    @Override
//    public String toString() {
//
//        return new Gson().toJson(this);
//    }
}
