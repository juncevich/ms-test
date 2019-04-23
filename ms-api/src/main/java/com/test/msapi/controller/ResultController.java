package com.test.msapi.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ResultController {

    @GetMapping("/results")
    public ResponseEntity getResults(){

        return ResponseEntity.ok().body("Test");
    }

}
