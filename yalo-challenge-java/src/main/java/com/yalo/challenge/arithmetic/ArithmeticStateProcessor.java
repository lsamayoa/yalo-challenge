package com.yalo.challenge.arithmetic;

import java.util.Map;

public class ArithmeticStateProcessor {

    private final ArithmeticExpressionProcessor expressionProcessor;

    public ArithmeticStateProcessor(ArithmeticExpressionProcessor expressionProcessor) {
        this.expressionProcessor = expressionProcessor;
    }

    public Map<String, Object> process(final ArithmeticStateTransitionRequest request) {
        try {
            final Double result = expressionProcessor.process(request.getExpression(), request.getContext());
            return Map.of(
                    request.getSave(), result,
                    "transition", request.getTransitions().getNext());
        } catch (Exception e) {
            // TODO: maybe handle better the exceptions
            return Map.of(
                    request.getSave(), "NaN",
                    "transition", request.getTransitions().getError());
        }
    }

    public static class ArithmeticStateTransitionRequest {
        private final String expression;
        private final String save;
        private final ArithmeticStateTransition transitions;
        private final Map<String, Double> context;

        public ArithmeticStateTransitionRequest(String expression,
                                                String save,
                                                ArithmeticStateTransition transitions,
                                                Map<String, Double> context) {
            this.expression = expression;
            this.save = save;
            this.transitions = transitions;
            this.context = context;
        }

        public String getExpression() {
            return expression;
        }

        public String getSave() {
            return save;
        }

        public ArithmeticStateTransition getTransitions() {
            return transitions;
        }

        public Map<String, Double> getContext() {
            return context;
        }
    }

    public static class ArithmeticStateTransition {
        private final long next;
        private final long error;

        public ArithmeticStateTransition(long next, long error) {
            this.next = next;
            this.error = error;
        }

        public long getNext() {
            return next;
        }

        public long getError() {
            return error;
        }
    }
}
