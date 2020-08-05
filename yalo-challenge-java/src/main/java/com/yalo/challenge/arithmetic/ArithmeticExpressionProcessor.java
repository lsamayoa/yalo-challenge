package com.yalo.challenge.arithmetic;

import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.CharStreams;
import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.tree.ParseTree;

import java.util.Map;

public class ArithmeticExpressionProcessor {

    public Double process(String expression, Map<String, Double> context) {
        final CharStream input = CharStreams.fromString(expression);
        final ArithmeticLexer lexer = new ArithmeticLexer(input);
        final TokenStream tokenStream = new CommonTokenStream(lexer);
        final ArithmeticParser parser = new ArithmeticParser(tokenStream);
        final ParseTree expressionTree = parser.expression();
        final ArithmeticExpressionVisitor arithmeticVisitor = new ArithmeticExpressionVisitor(context);
        return arithmeticVisitor.visit(expressionTree);
    }
}
