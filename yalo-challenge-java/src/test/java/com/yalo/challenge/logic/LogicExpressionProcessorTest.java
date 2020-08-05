package com.yalo.challenge.logic;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.MethodSource;

import java.util.Collections;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;


public class LogicExpressionProcessorTest {

    public static TestCase[] testCases() {
        return new TestCase[]{
                new TestCase("10 > 5", Collections.emptyMap(), true),
                new TestCase("6545984 > 84980", Collections.emptyMap(), true),
                new TestCase("21340 > 1234", Collections.emptyMap(), true),

                new TestCase("10 < 5", Collections.emptyMap(), false),
                new TestCase("16265464 < 234523", Collections.emptyMap(), false),
                new TestCase("12345 < 23452", Collections.emptyMap(), true),

                new TestCase("10 <= 5.5", Collections.emptyMap(), false),
                new TestCase("10 <= 5.6", Collections.emptyMap(), false),
                new TestCase("10 <= 5.9", Collections.emptyMap(), false),

                new TestCase("10 >= 512341", Collections.emptyMap(), false),
                new TestCase("123410 >= 5", Collections.emptyMap(), true),
                new TestCase("1342430 >= 5", Collections.emptyMap(), true),

                new TestCase("10 == 12345", Collections.emptyMap(), false),
                new TestCase("10 == 5", Collections.emptyMap(), false),
                new TestCase("10 == 10", Collections.emptyMap(), true),

                new TestCase("10 != 5", Collections.emptyMap(), true),
                new TestCase("10 != 10", Collections.emptyMap(), false),
                new TestCase("10 != 165451", Collections.emptyMap(), true),

                new TestCase("10 == 10 && 5 == 5", Collections.emptyMap(), true),
                new TestCase("10 == 6 && 5 == 5", Collections.emptyMap(), false),
                new TestCase("10 == 6 && 6 == 5", Collections.emptyMap(), false),
                new TestCase("10 == 6 && 6 == xyz", Collections.singletonMap("xyz", 5.0), false),

                new TestCase("10 == 10 || 5 == 5", Collections.emptyMap(), true),
                new TestCase("10 == 6 || 5 == 5", Collections.emptyMap(), true),
                new TestCase("10 == 6 || 6 == 5", Collections.emptyMap(), false),

                new TestCase("(10 == 6) == (6 == 5)", Collections.emptyMap(), true),
                new TestCase("(10 == 6) != (6 == 5)", Collections.emptyMap(), false),

                new TestCase("10 > (5 *12)**5", Collections.emptyMap(), false),
                new TestCase("10 < (5 *12)**5", Collections.emptyMap(), true),
                new TestCase("0 == 10", Collections.emptyMap(), false),
                new TestCase("10 == 10 && 5 != 10", Collections.emptyMap(), true),
                new TestCase("10 != 10", Collections.emptyMap(), false),

                new TestCase("10 != xyz", Collections.singletonMap("xyz", 10.0), false),


        };
    }

    private final LogicExpressionProcessor logicExpressionProcessor = new LogicExpressionProcessor();

    @ParameterizedTest
    @MethodSource("com.yalo.challenge.logic.LogicExpressionProcessorTest#testCases")
    public void process(TestCase testCase) {
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