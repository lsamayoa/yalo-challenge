const antlr4 = require('antlr4');
const ArithmeticLexer = require('./grammar/ArithmeticLexer');
const ArithmeticParser = require('./grammar/ArithmeticParser');
const LogicExpressionVisitor = require('./LogicExpressionVisitor');


class LogicExpressionProcessor {
    process(expression, context) {
        let chars = new antlr4.InputStream(expression);
        let lexer = new ArithmeticLexer.ArithmeticLexer(chars);
        let tokens = new antlr4.CommonTokenStream(lexer);
        let parser = new ArithmeticParser.ArithmeticParser(tokens);
        let tree = parser.logicExpression();
        let visitor = new LogicExpressionVisitor(context);
        return visitor.visit(tree);
    }
}

module.exports = LogicExpressionProcessor;