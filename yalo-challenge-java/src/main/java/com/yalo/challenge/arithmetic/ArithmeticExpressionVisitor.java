package com.yalo.challenge.arithmetic;

import java.util.Map;

public class ArithmeticExpressionVisitor extends ArithmeticBaseVisitor<Double> {
    private final Map<String, Double> context;

    public ArithmeticExpressionVisitor(Map<String, Double> context) {
        this.context = context;
    }

    @Override
    public Double visitExpression(ArithmeticParser.ExpressionContext ctx) {
        if (ctx.signedValue != null) {
            return visitSignedAtom(ctx.signedValue);
        }

        if (ctx.parentesisValue != null) {
            return visitExpression(ctx.parentesisValue);
        }

        if (ctx.operator == null) {
            throw new UnsupportedOperationException("An operator is needed to resolve expressions");
        }

        final String operator = ctx.operator.getText();
        final Double left = visitExpression(ctx.left);
        final Double right = visitExpression(ctx.right);

        switch (operator) {
            case "+":
                return left + right;
            case "-":
                return left - right;
            case "/":
                return left / right;
            case "*":
                return left * right;
            case "^":
            case "**":
                return Math.pow(left, right);
        }

        throw new UnsupportedOperationException("Unsupported or invalid expression");
    }

    @Override
    public Double visitSignedAtom(ArithmeticParser.SignedAtomContext ctx) {
        long minusCount = ctx.MINUS().size();
        if (minusCount % 2 > 0) {
            return -visitAtom(ctx.atom());
        }
        return visitAtom(ctx.atom());
    }

    @Override
    public Double visitAtom(ArithmeticParser.AtomContext ctx) {
        if (ctx.variableValue != null) {
            return context.get(ctx.variableValue.getText());
        }
        if (ctx.scientificValue != null) {
            return Double.parseDouble(ctx.scientificValue.getText());
        }
        throw new UnsupportedOperationException("Atom type not supported");
    }
}
