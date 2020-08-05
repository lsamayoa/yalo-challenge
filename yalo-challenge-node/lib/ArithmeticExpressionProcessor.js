const antlr4 = require('antlr4');
const ArithmeticLexer = require('./grammar/ArithmeticLexer');
const ArithmeticParser = require('./grammar/ArithmeticParser');
const ArithmeticExpressionVisitor = require('./ArithmeticExpressionVisitor');

class ArithmeticExpressionProcessor {
    process(expression, context) {
        let chars = new antlr4.InputStream(expression);
        let lexer = new ArithmeticLexer.ArithmeticLexer(chars);
        let tokens = new antlr4.CommonTokenStream(lexer);
        let parser = new ArithmeticParser.ArithmeticParser(tokens);
        let tree = parser.expression();
        let visitor = new ArithmeticExpressionVisitor(context);
        return visitor.visit(tree);
    }
}

module.exports = ArithmeticExpressionProcessor;