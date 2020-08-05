package com.yalo.challenge.logic;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.Collections;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

class LogicStateProcessorTest {

    private LogicExpressionProcessor logicExpressionProcessor = Mockito.mock(LogicExpressionProcessor.class);
    private LogicStateProcessor logicStateProcessor = new LogicStateProcessor(logicExpressionProcessor);

    @Test
    void process_ExpressionHasError_transitionsToErrorStatus() {
        final LogicStateProcessor.LogicStateTransitionRequest request = new LogicStateProcessor.LogicStateTransitionRequest(
                "expression",
                "result",
                Collections.emptyMap(),
                new LogicStateProcessor.LogicStateTransition(100, 200, 500));

        when(logicExpressionProcessor.process(Mockito.eq("expression"), Mockito.anyMap()))
                .thenThrow(new RuntimeException("Some error when processing expression"));

        Map<String, Object> result = logicStateProcessor.process(request);

        assertEquals(500l, result.get("transition"));
        assertEquals("Some error when processing expression", result.get("result"));
    }

    @Test
    void process_ExpressionReturnsTrue_transitionsToIsTrueStatus() {
        final LogicStateProcessor.LogicStateTransitionRequest request = new LogicStateProcessor.LogicStateTransitionRequest(
                "expression",
                "result",
                Collections.emptyMap(),
                new LogicStateProcessor.LogicStateTransition(100, 200, 500));

        when(logicExpressionProcessor.process(Mockito.eq("expression"), Mockito.anyMap()))
                .thenReturn(true);

        Map<String, Object> result = logicStateProcessor.process(request);

        assertEquals(100l, result.get("transition"));
        assertEquals(true, result.get("result"));
    }

    @Test
    void process_ExpressionReturnsFalse_transitionsToIsFalseStatus() {
        final LogicStateProcessor.LogicStateTransitionRequest request = new LogicStateProcessor.LogicStateTransitionRequest(
                "expression",
                "result",
                Collections.emptyMap(),
                new LogicStateProcessor.LogicStateTransition(100, 200, 500));

        when(logicExpressionProcessor.process(Mockito.eq("expression"), Mockito.anyMap()))
                .thenReturn(false);

        Map<String, Object> result = logicStateProcessor.process(request);

        assertEquals(200l, result.get("transition"));
        assertEquals(false, result.get("result"));
    }
}