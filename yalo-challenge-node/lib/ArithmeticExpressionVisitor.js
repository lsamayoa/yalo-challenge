const ArithmeticVisitor = require('./grammar/ArithmeticVisitor').ArithmeticVisitor;

class ArithmeticExpressionVisitor extends ArithmeticVisitor {
    constructor(variablesContext){
        super();
        this.variablesContext = variablesContext;
    }

    visitExpression(ctx) {
        if (ctx.signedValue != null) {
            return this.visitSignedAtom(ctx.signedValue);
        }

        if (ctx.parentesisValue != null) {
            return this.visitExpression(ctx.parentesisValue);
        }

        if(ctx.factorialValue != null) {
            let value = this.visitExpression(ctx.factorialValue);
            return factorial(value);
        }

        if (ctx.operator == null) {
            throw new Error("An operator is needed to resolve expressions");
        }

        let operator = ctx.operator.text;
        let left = this.visitExpression(ctx.left);
        let right = this.visitExpression(ctx.right);

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

        throw new Error("Unsupported or invalid expression");
    }

    visitSignedAtom(ctx) {
        let minusCount = ctx.MINUS().size;
        if (minusCount % 2 > 0) {
            return -this.visitAtom(ctx.atom());
        }
        return this.visitAtom(ctx.atom());
    }

    visitAtom(ctx) {
        if (ctx.variableValue != null) {
            return this.variablesContext[ctx.variableValue.getText()];
        }
        if (ctx.scientificValue != null) {
            return parseFloat(ctx.scientificValue.getText());
        }
        throw new Error("Atom type not supported");
    }

    factorial(input) {
        if (input == 0){
            return 1;
        }
        else {
            return input * this.factorial(input-1);
        }
    } 
}

module.exports = ArithmeticExpressionVisitor;