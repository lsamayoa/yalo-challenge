package com.yalo.challenge.arithmetic;


import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.MethodSource;

import java.util.Collections;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class ArithmeticExpressionProcessorTest {

    public static TestCase[] testCases() {
        return new TestCase[]{
                new TestCase("+5", Collections.emptyMap(), 5.0),
                new TestCase("+-----5", Collections.emptyMap(), -5.0),

                new TestCase("5+5", Collections.emptyMap(), 10.0),
                new TestCase("5+7+abc", Collections.singletonMap("abc", 10.0), 22.0),

                new TestCase("5-5", Collections.emptyMap(), 0.0),
                new TestCase("5-5-abc123", Collections.singletonMap("abc123", 10.0), -10.0),

                new TestCase("5/5", Collections.emptyMap(), 1.0),
                new TestCase("5/5/p2pa", Collections.singletonMap("p2pa", 10.0), 0.1),

                new TestCase("5*5", Collections.emptyMap(), 25.0),
                new TestCase("5*abc", Collections.singletonMap("abc", 20.0), 100.0),

                new TestCase("5**5", Collections.emptyMap(), 3125.0),
                new TestCase("5**5**op2", Collections.singletonMap("op2", 2.0), 9765625.0),

                new TestCase("5/xyz123*7", Collections.singletonMap("xyz123", 7.0), 5.0),
                new TestCase("(5*5) + (78**2/5) * 24 (--5*5+96)", Collections.emptyMap(), 29228.199999999997),
                new TestCase("5+10-52*(4932348*44)/50**10", Collections.emptyMap(), 14.999999884439427),
                new TestCase("5**5**(op2!)", Collections.singletonMap("op2", 3.0), 9.313225746154785E20),
        };
    }

    private final ArithmeticExpressionProcessor expressionProcessor = new ArithmeticExpressionProcessor();

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