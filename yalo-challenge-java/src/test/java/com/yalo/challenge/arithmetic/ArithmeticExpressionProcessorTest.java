package com.yalo.challenge.arithmetic;


import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.MethodSource;

import java.util.Collections;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class ArithmeticExpressionProcessorTest {

    public static TestCase[] testCases() {
        return new TestCase[]{
                new TestCase("5+5", Collections.emptyMap(), 10.0),
                new TestCase("5-5", Collections.emptyMap(), 0.0),
                new TestCase("5+10-52*(4932348*44)/50**10", Collections.emptyMap(), 14.999999884439427),
        };
    }

    private ArithmeticExpressionProcessor expressionProcessor = new ArithmeticExpressionProcessor();

    @ParameterizedTest
    @MethodSource("com.yalo.challenge.arithmetic.ArithmeticExpressionProcessorTest#testCases")
    public void process(TestCase testCase) {
        Double result = expressionProcessor.process(testCase.getExpression(), testCase.getContext());
        assertEquals(testCase.getExpectedResult(), result);
    }

    private static class TestCase {
        private final String expression;
        private final Map<String, Double> context;
        private final Double expectedResult;

        public TestCase(String expression, Map<String, Double> context, Double expectedResult) {
            this.expression = expression;
            this.context = context;
            this.expectedResult = expectedResult;
        }

        public String getExpression() {
            return expression;
        }

        public Map<String, Double> getContext() {
            return context;
        }

        public Double getExpectedResult() {
            return expectedResult;
        }
    }
}