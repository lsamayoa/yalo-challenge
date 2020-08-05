package com.yalo.challenge.web;

import com.yalo.challenge.arithmetic.ArithmeticExpressionProcessor;
import com.yalo.challenge.arithmetic.ArithmeticStateProcessor;
import com.yalo.challenge.logic.LogicExpressionProcessor;
import com.yalo.challenge.logic.LogicStateProcessor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ExpressionsChallengeWebApplication {
    public static void main(String[] args) {
        SpringApplication.run(ExpressionsChallengeWebApplication.class, args);
    }

    @Bean
    public ArithmeticExpressionProcessor arithmeticExpressionProcessor(){
        return new ArithmeticExpressionProcessor();
    }

    @Bean
    public ArithmeticStateProcessor arithmeticStateProcessor(ArithmeticExpressionProcessor arithmeticExpressionProcessor) {
        return new ArithmeticStateProcessor(arithmeticExpressionProcessor);
    }

    @Bean
    public LogicExpressionProcessor logicExpressionProcessor() {
        return new LogicExpressionProcessor();
    }

    @Bean
    public LogicStateProcessor logicStateProcessor(LogicExpressionProcessor logicExpressionProcessor) {
        return new LogicStateProcessor(logicExpressionProcessor);
    }
}
