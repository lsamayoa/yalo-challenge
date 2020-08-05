const ArithmeticVisitor = require('./grammar/ArithmeticVisitor').ArithmeticVisitor;
const ArithmeticExpressionVisitor = require('./ArithmeticExpressionVisitor');

class LogicExpressionVistor extends ArithmeticVisitor {

    constructor(variablesContext) {
        super();
        this.arithmeticVisitor = new ArithmeticExpressionVisitor(variablesContext);
    }

    visitLogicExpression(ctx) {
        if (ctx.parentesisValue != null) {
            return visitLogicExpression(ctx.parentesisValue);
        }

        if (ctx.left != null && ctx.right != null) {
            let operator = ctx.operator.getText();
            let left = this.arithmeticVisitor.visitExpression(ctx.left);
            let right = this.arithmeticVisitor.visitExpression(ctx.right);
            return this.resolveDoubleLogicOperation(left, right, operator);
        }

        if(ctx.leftLogic != null && ctx.rightLogic != null) {
            let operator = ctx.logicOperator.getText();
            let left = this.visitLogicExpression(ctx.leftLogic);
            let right = this.visitLogicExpression(ctx.rightLogic);
            return this.resolveLogicOperation(left, right, operator);
        }

        throw new Error("Unsupported or invalid expression");
    }

    resolveLogicOperation(left, right, operator) {
        if (operator == null) {
            throw new Error("An operator is needed to resolve expressions");
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

        throw new Error("Unsupported or invalid expression");
    }

    resolveDoubleLogicOperation(left, right, operator) {
        if (operator == null) {
            throw new Error("An operator is needed to resolve expressions");
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
                return left == right;
            case "!=":
                return left != right;
        }
        throw new Error("Unsupported or invalid expression");
    }
}

module.exports = LogicExpressionVistor;