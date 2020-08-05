package com.yalo.challenge.logic;

import java.util.Map;

public class LogicStateProcessor {

    private final LogicExpressionProcessor expressionProcessor;

    public LogicStateProcessor(LogicExpressionProcessor expressionProcessor) {
        this.expressionProcessor = expressionProcessor;
    }

    public Map<String, Object> process(LogicStateTransitionRequest request) {
        try {
            final Boolean result = expressionProcessor.process(request.getExpression(), request.getContext());
            long transitionResult = result ? request.getTransitions().getIsTrue() : request.getTransitions().getIsFalse();
            return Map.of(
                    request.getSave(), result,
                    "transition", transitionResult);
        } catch (Exception e) {
            final String message = e.getMessage() != null ? e.getMessage() : "Error while resolving expression";
            return Map.of(
                    request.getSave(), message,
                    "transition", request.getTransitions().getIsError());
        }
    }

    public static class LogicStateTransitionRequest {
        private final String expression;
        private final String save;
        private final Map<String, Double> context;
        private final LogicStateTransition transitions;

        public LogicStateTransitionRequest(String expression, String save, Map<String, Double> context, LogicStateTransition transitions) {
            this.expression = expression;
            this.save = save;
            this.context = context;
            this.transitions = transitions;
        }

        public String getExpression() {
            return expression;
        }

        public String getSave() {
            return save;
        }

        public Map<String, Double> getContext() {
            return context;
        }

        public LogicStateTransition getTransitions() {
            return transitions;
        }
    }


    public static class LogicStateTransition {
        private final long isTrue;
        private final long isFalse;
        private final long isError;

        public LogicStateTransition(long isTrue, long isFalse, long isError) {
            this.isTrue = isTrue;
            this.isFalse = isFalse;
            this.isError = isError;
        }

        public long getIsTrue() {
            return isTrue;
        }

        public long getIsFalse() {
            return isFalse;
        }

        public long getIsError() {
            return isError;
        }
    }
}
