package com.yalo.challenge.logic;

import com.yalo.challenge.arithmetic.ArithmeticBaseVisitor;
import com.yalo.challenge.arithmetic.ArithmeticExpressionVisitor;
import com.yalo.challenge.arithmetic.ArithmeticParser;

import java.util.Map;

public class LogicExpressionVisitor extends ArithmeticBaseVisitor<Boolean> {
    private final ArithmeticExpressionVisitor arithmeticVisitor;

    public LogicExpressionVisitor(Map<String, Double> context){
        this.arithmeticVisitor = new ArithmeticExpressionVisitor(context);
    }

    @Override
    public Boolean visitLogicExpression(ArithmeticParser.LogicExpressionContext ctx) {
        if (ctx.parentesisValue != null) {
            return visitLogicExpression(ctx.parentesisValue);
        }

        if (ctx.left != null && ctx.right != null) {
            final String operator = ctx.operator.getText();
            final Double left = arithmeticVisitor.visitExpression(ctx.left);
            final Double right = arithmeticVisitor.visitExpression(ctx.right);
            return resolveDoubleOperation(left, right, operator);
        }

        if(ctx.leftLogic != null && ctx.rightLogic != null) {
            final String operator = ctx.logicOperator.getText();
            final Boolean left = visitLogicExpression(ctx.leftLogic);
            final Boolean right = visitLogicExpression(ctx.rightLogic);
            return resolveLogicOperation(left, right, operator);
        }

        throw new UnsupportedOperationException("Unsupported or invalid expression");
    }

    private Boolean resolveLogicOperation(Boolean left, Boolean right, String operator) {
        if (operator == null) {
            throw new UnsupportedOperationException("An operator is needed to resolve expressions");
        }

        switch (operator){
            case "||":
                return left || right;
            case "&&":
                return left && right;
            case "==":
                return left == right;
            case "!=":
                return left != right;
        }

        throw new UnsupportedOperationException("Unsupported or invalid expression");
    }

    private Boolean resolveDoubleOperation(Double left, Double right, String operator) {
        if (operator == null) {
            throw new UnsupportedOperationException("An operator is needed to resolve expressions");
        }

        switch (operator){
            case "<":
                return left < right;
            case "<=":
                return left <= right;
            case ">":
                return left > right;
            case ">=":
                return left >= right;
            case "==":
                return left.equals(right);
            case "!=":
                return !left.equals(right);
        }
        throw new UnsupportedOperationException("Unsupported or invalid expression");
    }
}
