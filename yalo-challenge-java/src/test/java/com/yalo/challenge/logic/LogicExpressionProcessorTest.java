package com.yalo.challenge.logic;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.MethodSource;

import java.util.Collections;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;


public class LogicExpressionProcessorTest {

    public static TestCase[] testCases() {
        return new TestCase[]{
                new TestCase("10 > (5 *12)**5", Collections.emptyMap(), false),
                new TestCase("10 < (5 *12)**5", Collections.emptyMap(), true),
                new TestCase("0 == 10", Collections.emptyMap(), false),
                new TestCase("10 == 10 && 5 != 10", Collections.emptyMap(), true),
                new TestCase("10 != 10", Collections.emptyMap(), false),
        };
    }

    @ParameterizedTest
    @MethodSource("com.yalo.challenge.logic.LogicExpressionProcessorTest#testCases")
    public void process(TestCase testCase) {
        LogicExpressionProcessor logicExpressionProcessor = new LogicExpressionProcessor();
        Boolean result = logicExpressionProcessor.process(testCase.getExpression(), testCase.getContext());
        assertEquals(testCase.getExpectedResult(), result);
    }


    private static class TestCase {
        private final String expression;
        private final Map<String, Double> context;
        private final Boolean expectedResult;

        public TestCase(String expression, Map<String, Double> context, Boolean expectedResult) {
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

        public Boolean getExpectedResult() {
            return expectedResult;
        }
    }
}