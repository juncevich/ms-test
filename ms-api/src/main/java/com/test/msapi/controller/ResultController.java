package com.test.msapi.controller;

import com.test.msapi.service.ResultService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ResultController {

    private final ResultService resultService;

    public ResultController(ResultService resultService) {
        this.resultService = resultService;
    }

    @GetMapping("/results")
    public ResponseEntity getResults(){

        return ResponseEntity.ok().body(resultService.getResults());
    }

}
