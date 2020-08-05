package com.yalo.challenge.web;

import com.yalo.challenge.logic.LogicStateProcessor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/logic")
public class LogicStateController {
    private final LogicStateProcessor logicStateProcessor;

    @Autowired
    public LogicStateController(LogicStateProcessor logicStateProcessor) {
        this.logicStateProcessor = logicStateProcessor;
    }

    @PostMapping(consumes = "application/json", produces = "application/json")
    public Map<String, Object> process(@RequestBody LogicStateProcessor.LogicStateTransitionRequest request){
        return logicStateProcessor.process(request);
    }

}
