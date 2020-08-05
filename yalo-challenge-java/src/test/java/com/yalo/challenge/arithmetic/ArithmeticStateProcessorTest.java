package com.yalo.challenge.arithmetic;

import com.yalo.challenge.logic.LogicExpressionProcessor;
import com.yalo.challenge.logic.LogicStateProcessor;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.Collections;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

class ArithmeticStateProcessorTest {

    private ArithmeticExpressionProcessor arithmeticExpressionProcessor = Mockito.mock(ArithmeticExpressionProcessor.class);
    private ArithmeticStateProcessor arithmeticStateProcessor = new ArithmeticStateProcessor(arithmeticExpressionProcessor);


    @Test
    void process_ExpressionHasError_transitionsToErrorStatus() {
        final ArithmeticStateProcessor.ArithmeticStateTransitionRequest request = new  ArithmeticStateProcessor.ArithmeticStateTransitionRequest(
                "expression",
                "result",
                new ArithmeticStateProcessor.ArithmeticStateTransition(200, 500),
                Collections.emptyMap());

        when(arithmeticExpressionProcessor.process(Mockito.eq("expression"), Mockito.anyMap()))
                .thenThrow(new RuntimeException("Some error when processing expression"));

        Map<String, Object> result = arithmeticStateProcessor.process(request);

        assertEquals(500l, result.get("transition"));
        assertEquals("Some error when processing expression", result.get("result"));
    }

    @Test
    void process_ExpressionIsCalculatedCorrectly_transitionsToIsSuccessStatus() {
        final ArithmeticStateProcessor.ArithmeticStateTransitionRequest request = new  ArithmeticStateProcessor.ArithmeticStateTransitionRequest(
                "expression",
                "result",
                new ArithmeticStateProcessor.ArithmeticStateTransition(200, 500),
                Collections.emptyMap());

        when(arithmeticExpressionProcessor.process(Mockito.eq("expression"), Mockito.anyMap()))
                .thenReturn(10.0);

        Map<String, Object> result = arithmeticStateProcessor.process(request);

        assertEquals(200l, result.get("transition"));
        assertEquals(10.0, result.get("result"));
    }

}