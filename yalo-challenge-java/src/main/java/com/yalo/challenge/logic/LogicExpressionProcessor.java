package com.yalo.challenge.logic;

import com.yalo.challenge.arithmetic.ArithmeticLexer;
import com.yalo.challenge.arithmetic.ArithmeticParser;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.CharStreams;
import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.tree.ParseTree;

import java.util.Map;

public class LogicExpressionProcessor {

    public Boolean process(String expression, Map<String, Double> context) {
        final CharStream input = CharStreams.fromString(expression);
        final ArithmeticLexer lexer = new ArithmeticLexer(input);
        final TokenStream tokenStream = new CommonTokenStream(lexer);
        final ArithmeticParser parser = new ArithmeticParser(tokenStream);
        final ParseTree expressionTree = parser.logicExpression();
        final LogicExpressionVisitor arithmeticVisitor = new LogicExpressionVisitor(context);
        return arithmeticVisitor.visit(expressionTree);
    }
}
