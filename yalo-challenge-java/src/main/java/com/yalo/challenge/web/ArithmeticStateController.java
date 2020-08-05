package com.yalo.challenge.web;

import com.yalo.challenge.arithmetic.ArithmeticStateProcessor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/arithmetic")
public class ArithmeticStateController {

    private final ArithmeticStateProcessor arithmeticStateProcessor;

    @Autowired
    public ArithmeticStateController(ArithmeticStateProcessor arithmeticStateProcessor) {
        this.arithmeticStateProcessor = arithmeticStateProcessor;
    }

    @PostMapping(consumes = "application/json", produces = "application/json")
    public Map<String, Object> process(@RequestBody ArithmeticStateProcessor.ArithmeticStateTransitionRequest request) {
        return arithmeticStateProcessor.process(request);
    }

}
