// Generated from Arithmetic.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by ArithmeticParser.

function ArithmeticVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

ArithmeticVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
ArithmeticVisitor.prototype.constructor = ArithmeticVisitor;

// Visit a parse tree produced by ArithmeticParser#logicExpression.
ArithmeticVisitor.prototype.visitLogicExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ArithmeticParser#logicop.
ArithmeticVisitor.prototype.visitLogicop = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ArithmeticParser#relop.
ArithmeticVisitor.prototype.visitRelop = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ArithmeticParser#expression.
ArithmeticVisitor.prototype.visitExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ArithmeticParser#signedAtom.
ArithmeticVisitor.prototype.visitSignedAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ArithmeticParser#atom.
ArithmeticVisitor.prototype.visitAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ArithmeticParser#scientific.
ArithmeticVisitor.prototype.visitScientific = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ArithmeticParser#variable.
ArithmeticVisitor.prototype.visitVariable = function(ctx) {
  return this.visitChildren(ctx);
};



exports.ArithmeticVisitor = ArithmeticVisitor;