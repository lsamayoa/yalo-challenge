package com.yalo.challenge.arithmetic;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

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
            final String message = e.getMessage() != null ? e.getMessage() : "Error while resolving expression";
            return Map.of(
                    request.getSave(), message,
                    "transition", request.getTransitions().getError());
        }
    }

    public static class ArithmeticStateTransitionRequest {
        private String expression;
        private String save;
        private ArithmeticStateTransition transitions;
        private Map<String, Double> context;

        @JsonCreator
        public ArithmeticStateTransitionRequest(@JsonProperty("expression") String expression,
                                                @JsonProperty("save") String save,
                                                @JsonProperty("transitions") ArithmeticStateTransition transitions,
                                                @JsonProperty("context") Map<String, Double> context) {
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

        @JsonCreator
        public ArithmeticStateTransition(@JsonProperty("next") long next,
                                         @JsonProperty("error") long error) {
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
