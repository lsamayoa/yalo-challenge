// Generated from Arithmetic.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ArithmeticListener = require('./ArithmeticListener').ArithmeticListener;
var ArithmeticVisitor = require('./ArithmeticVisitor').ArithmeticVisitor;

var grammarFileName = "Arithmetic.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0016S\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002\u001c",
    "\n\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0007\u0002",
    "\"\n\u0002\f\u0002\u000e\u0002%\u000b\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0005\u00051\n\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005>\n\u0005\f\u0005\u000e",
    "\u0005A\u000b\u0005\u0003\u0006\u0007\u0006D\n\u0006\f\u0006\u000e\u0006",
    "G\u000b\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0005",
    "\u0007M\n\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0002\u0004",
    "\u0002\b\n\u0002\u0004\u0006\b\n\f\u000e\u0010\u0002\u0006\u0003\u0002",
    "\u0012\u0015\u0003\u0002\u000e\u0013\u0003\u0002\t\n\u0003\u0002\u0007",
    "\b\u0002S\u0002\u001b\u0003\u0002\u0002\u0002\u0004&\u0003\u0002\u0002",
    "\u0002\u0006(\u0003\u0002\u0002\u0002\b0\u0003\u0002\u0002\u0002\nE",
    "\u0003\u0002\u0002\u0002\fL\u0003\u0002\u0002\u0002\u000eN\u0003\u0002",
    "\u0002\u0002\u0010P\u0003\u0002\u0002\u0002\u0012\u0013\b\u0002\u0001",
    "\u0002\u0013\u0014\u0007\u0005\u0002\u0002\u0014\u0015\u0005\u0002\u0002",
    "\u0002\u0015\u0016\u0007\u0006\u0002\u0002\u0016\u001c\u0003\u0002\u0002",
    "\u0002\u0017\u0018\u0005\b\u0005\u0002\u0018\u0019\u0005\u0006\u0004",
    "\u0002\u0019\u001a\u0005\b\u0005\u0002\u001a\u001c\u0003\u0002\u0002",
    "\u0002\u001b\u0012\u0003\u0002\u0002\u0002\u001b\u0017\u0003\u0002\u0002",
    "\u0002\u001c#\u0003\u0002\u0002\u0002\u001d\u001e\f\u0005\u0002\u0002",
    "\u001e\u001f\u0005\u0004\u0003\u0002\u001f \u0005\u0002\u0002\u0006",
    " \"\u0003\u0002\u0002\u0002!\u001d\u0003\u0002\u0002\u0002\"%\u0003",
    "\u0002\u0002\u0002#!\u0003\u0002\u0002\u0002#$\u0003\u0002\u0002\u0002",
    "$\u0003\u0003\u0002\u0002\u0002%#\u0003\u0002\u0002\u0002&\'\t\u0002",
    "\u0002\u0002\'\u0005\u0003\u0002\u0002\u0002()\t\u0003\u0002\u0002)",
    "\u0007\u0003\u0002\u0002\u0002*+\b\u0005\u0001\u0002+,\u0007\u0005\u0002",
    "\u0002,-\u0005\b\u0005\u0002-.\u0007\u0006\u0002\u0002.1\u0003\u0002",
    "\u0002\u0002/1\u0005\n\u0006\u00020*\u0003\u0002\u0002\u00020/\u0003",
    "\u0002\u0002\u00021?\u0003\u0002\u0002\u000223\f\b\u0002\u000234\u0007",
    "\f\u0002\u00024>\u0005\b\u0005\t56\f\u0007\u0002\u000267\t\u0004\u0002",
    "\u00027>\u0005\b\u0005\b89\f\u0006\u0002\u00029:\t\u0005\u0002\u0002",
    ":>\u0005\b\u0005\u0007;<\f\u0004\u0002\u0002<>\u0007\r\u0002\u0002=",
    "2\u0003\u0002\u0002\u0002=5\u0003\u0002\u0002\u0002=8\u0003\u0002\u0002",
    "\u0002=;\u0003\u0002\u0002\u0002>A\u0003\u0002\u0002\u0002?=\u0003\u0002",
    "\u0002\u0002?@\u0003\u0002\u0002\u0002@\t\u0003\u0002\u0002\u0002A?",
    "\u0003\u0002\u0002\u0002BD\t\u0005\u0002\u0002CB\u0003\u0002\u0002\u0002",
    "DG\u0003\u0002\u0002\u0002EC\u0003\u0002\u0002\u0002EF\u0003\u0002\u0002",
    "\u0002FH\u0003\u0002\u0002\u0002GE\u0003\u0002\u0002\u0002HI\u0005\f",
    "\u0007\u0002I\u000b\u0003\u0002\u0002\u0002JM\u0005\u000e\b\u0002KM",
    "\u0005\u0010\t\u0002LJ\u0003\u0002\u0002\u0002LK\u0003\u0002\u0002\u0002",
    "M\r\u0003\u0002\u0002\u0002NO\u0007\u0004\u0002\u0002O\u000f\u0003\u0002",
    "\u0002\u0002PQ\u0007\u0003\u0002\u0002Q\u0011\u0003\u0002\u0002\u0002",
    "\t\u001b#0=?EL"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, "'('", "')'", "'+'", "'-'", "'*'", 
                     "'/'", "'.'", null, "'!'", "'>='", "'<='", "'>'", "'<'", 
                     "'=='", "'!='", "'&&'", "'||'" ];

var symbolicNames = [ null, "VARIABLE", "SCIENTIFIC_NUMBER", "LPAREN", "RPAREN", 
                      "PLUS", "MINUS", "TIMES", "DIV", "POINT", "POW", "FACT", 
                      "GTE", "LTE", "GT", "LT", "EQ", "NEQ", "AND", "OR", 
                      "WS" ];

var ruleNames =  [ "logicExpression", "logicop", "relop", "expression", 
                   "signedAtom", "atom", "scientific", "variable" ];

function ArithmeticParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ArithmeticParser.prototype = Object.create(antlr4.Parser.prototype);
ArithmeticParser.prototype.constructor = ArithmeticParser;

Object.defineProperty(ArithmeticParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ArithmeticParser.EOF = antlr4.Token.EOF;
ArithmeticParser.VARIABLE = 1;
ArithmeticParser.SCIENTIFIC_NUMBER = 2;
ArithmeticParser.LPAREN = 3;
ArithmeticParser.RPAREN = 4;
ArithmeticParser.PLUS = 5;
ArithmeticParser.MINUS = 6;
ArithmeticParser.TIMES = 7;
ArithmeticParser.DIV = 8;
ArithmeticParser.POINT = 9;
ArithmeticParser.POW = 10;
ArithmeticParser.FACT = 11;
ArithmeticParser.GTE = 12;
ArithmeticParser.LTE = 13;
ArithmeticParser.GT = 14;
ArithmeticParser.LT = 15;
ArithmeticParser.EQ = 16;
ArithmeticParser.NEQ = 17;
ArithmeticParser.AND = 18;
ArithmeticParser.OR = 19;
ArithmeticParser.WS = 20;

ArithmeticParser.RULE_logicExpression = 0;
ArithmeticParser.RULE_logicop = 1;
ArithmeticParser.RULE_relop = 2;
ArithmeticParser.RULE_expression = 3;
ArithmeticParser.RULE_signedAtom = 4;
ArithmeticParser.RULE_atom = 5;
ArithmeticParser.RULE_scientific = 6;
ArithmeticParser.RULE_variable = 7;


function LogicExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArithmeticParser.RULE_logicExpression;
    this.leftLogic = null; // LogicExpressionContext
    this.parentesisValue = null; // LogicExpressionContext
    this.left = null; // ExpressionContext
    this.operator = null; // RelopContext
    this.right = null; // ExpressionContext
    this.logicOperator = null; // LogicopContext
    this.rightLogic = null; // LogicExpressionContext
    return this;
}

LogicExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LogicExpressionContext.prototype.constructor = LogicExpressionContext;

LogicExpressionContext.prototype.LPAREN = function() {
    return this.getToken(ArithmeticParser.LPAREN, 0);
};

LogicExpressionContext.prototype.RPAREN = function() {
    return this.getToken(ArithmeticParser.RPAREN, 0);
};

LogicExpressionContext.prototype.logicExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LogicExpressionContext);
    } else {
        return this.getTypedRuleContext(LogicExpressionContext,i);
    }
};

LogicExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

LogicExpressionContext.prototype.relop = function() {
    return this.getTypedRuleContext(RelopContext,0);
};

LogicExpressionContext.prototype.logicop = function() {
    return this.getTypedRuleContext(LogicopContext,0);
};

LogicExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArithmeticListener ) {
        listener.enterLogicExpression(this);
	}
};

LogicExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArithmeticListener ) {
        listener.exitLogicExpression(this);
	}
};

LogicExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArithmeticVisitor ) {
        return visitor.visitLogicExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ArithmeticParser.prototype.logicExpression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new LogicExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 0;
    this.enterRecursionRule(localctx, 0, ArithmeticParser.RULE_logicExpression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 25;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.state = 17;
            this.match(ArithmeticParser.LPAREN);
            this.state = 18;
            localctx.parentesisValue = this.logicExpression(0);
            this.state = 19;
            this.match(ArithmeticParser.RPAREN);
            break;

        case 2:
            this.state = 21;
            localctx.left = this.expression(0);
            this.state = 22;
            localctx.operator = this.relop();
            this.state = 23;
            localctx.right = this.expression(0);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 33;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new LogicExpressionContext(this, _parentctx, _parentState);
                localctx.leftLogic = _prevctx;
                this.pushNewRecursionContext(localctx, _startState, ArithmeticParser.RULE_logicExpression);
                this.state = 27;
                if (!( this.precpred(this._ctx, 3))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                }
                this.state = 28;
                localctx.logicOperator = this.logicop();
                this.state = 29;
                localctx.rightLogic = this.logicExpression(4); 
            }
            this.state = 35;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function LogicopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArithmeticParser.RULE_logicop;
    return this;
}

LogicopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LogicopContext.prototype.constructor = LogicopContext;

LogicopContext.prototype.EQ = function() {
    return this.getToken(ArithmeticParser.EQ, 0);
};

LogicopContext.prototype.NEQ = function() {
    return this.getToken(ArithmeticParser.NEQ, 0);
};

LogicopContext.prototype.AND = function() {
    return this.getToken(ArithmeticParser.AND, 0);
};

LogicopContext.prototype.OR = function() {
    return this.getToken(ArithmeticParser.OR, 0);
};

LogicopContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArithmeticListener ) {
        listener.enterLogicop(this);
	}
};

LogicopContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArithmeticListener ) {
        listener.exitLogicop(this);
	}
};

LogicopContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArithmeticVisitor ) {
        return visitor.visitLogicop(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ArithmeticParser.LogicopContext = LogicopContext;

ArithmeticParser.prototype.logicop = function() {

    var localctx = new LogicopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ArithmeticParser.RULE_logicop);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 36;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ArithmeticParser.EQ) | (1 << ArithmeticParser.NEQ) | (1 << ArithmeticParser.AND) | (1 << ArithmeticParser.OR))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RelopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArithmeticParser.RULE_relop;
    return this;
}

RelopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RelopContext.prototype.constructor = RelopContext;

RelopContext.prototype.EQ = function() {
    return this.getToken(ArithmeticParser.EQ, 0);
};

RelopContext.prototype.NEQ = function() {
    return this.getToken(ArithmeticParser.NEQ, 0);
};

RelopContext.prototype.GT = function() {
    return this.getToken(ArithmeticParser.GT, 0);
};

RelopContext.prototype.GTE = function() {
    return this.getToken(ArithmeticParser.GTE, 0);
};

RelopContext.prototype.LT = function() {
    return this.getToken(ArithmeticParser.LT, 0);
};

RelopContext.prototype.LTE = function() {
    return this.getToken(ArithmeticParser.LTE, 0);
};

RelopContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArithmeticListener ) {
        listener.enterRelop(this);
	}
};

RelopContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArithmeticListener ) {
        listener.exitRelop(this);
	}
};

RelopContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArithmeticVisitor ) {
        return visitor.visitRelop(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ArithmeticParser.RelopContext = RelopContext;

ArithmeticParser.prototype.relop = function() {

    var localctx = new RelopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ArithmeticParser.RULE_relop);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 38;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ArithmeticParser.GTE) | (1 << ArithmeticParser.LTE) | (1 << ArithmeticParser.GT) | (1 << ArithmeticParser.LT) | (1 << ArithmeticParser.EQ) | (1 << ArithmeticParser.NEQ))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArithmeticParser.RULE_expression;
    this.left = null; // ExpressionContext
    this.factorialValue = null; // ExpressionContext
    this.parentesisValue = null; // ExpressionContext
    this.signedValue = null; // SignedAtomContext
    this.operator = null; // Token
    this.right = null; // ExpressionContext
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.LPAREN = function() {
    return this.getToken(ArithmeticParser.LPAREN, 0);
};

ExpressionContext.prototype.RPAREN = function() {
    return this.getToken(ArithmeticParser.RPAREN, 0);
};

ExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExpressionContext.prototype.signedAtom = function() {
    return this.getTypedRuleContext(SignedAtomContext,0);
};

ExpressionContext.prototype.POW = function() {
    return this.getToken(ArithmeticParser.POW, 0);
};

ExpressionContext.prototype.TIMES = function() {
    return this.getToken(ArithmeticParser.TIMES, 0);
};

ExpressionContext.prototype.DIV = function() {
    return this.getToken(ArithmeticParser.DIV, 0);
};

ExpressionContext.prototype.PLUS = function() {
    return this.getToken(ArithmeticParser.PLUS, 0);
};

ExpressionContext.prototype.MINUS = function() {
    return this.getToken(ArithmeticParser.MINUS, 0);
};

ExpressionContext.prototype.FACT = function() {
    return this.getToken(ArithmeticParser.FACT, 0);
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArithmeticListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArithmeticListener ) {
        listener.exitExpression(this);
	}
};

ExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArithmeticVisitor ) {
        return visitor.visitExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ArithmeticParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 6;
    this.enterRecursionRule(localctx, 6, ArithmeticParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 46;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ArithmeticParser.LPAREN:
            this.state = 41;
            this.match(ArithmeticParser.LPAREN);
            this.state = 42;
            localctx.parentesisValue = this.expression(0);
            this.state = 43;
            this.match(ArithmeticParser.RPAREN);
            break;
        case ArithmeticParser.VARIABLE:
        case ArithmeticParser.SCIENTIFIC_NUMBER:
        case ArithmeticParser.PLUS:
        case ArithmeticParser.MINUS:
            this.state = 45;
            localctx.signedValue = this.signedAtom();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 61;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 59;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ArithmeticParser.RULE_expression);
                    this.state = 48;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 49;
                    localctx.operator = this.match(ArithmeticParser.POW);
                    this.state = 50;
                    localctx.right = this.expression(7);
                    break;

                case 2:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ArithmeticParser.RULE_expression);
                    this.state = 51;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 52;
                    localctx.operator = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===ArithmeticParser.TIMES || _la===ArithmeticParser.DIV)) {
                        localctx.operator = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 53;
                    localctx.right = this.expression(6);
                    break;

                case 3:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ArithmeticParser.RULE_expression);
                    this.state = 54;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 55;
                    localctx.operator = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===ArithmeticParser.PLUS || _la===ArithmeticParser.MINUS)) {
                        localctx.operator = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 56;
                    localctx.right = this.expression(5);
                    break;

                case 4:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    localctx.factorialValue = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ArithmeticParser.RULE_expression);
                    this.state = 57;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 58;
                    this.match(ArithmeticParser.FACT);
                    break;

                } 
            }
            this.state = 63;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function SignedAtomContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArithmeticParser.RULE_signedAtom;
    return this;
}

SignedAtomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SignedAtomContext.prototype.constructor = SignedAtomContext;

SignedAtomContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};

SignedAtomContext.prototype.PLUS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ArithmeticParser.PLUS);
    } else {
        return this.getToken(ArithmeticParser.PLUS, i);
    }
};


SignedAtomContext.prototype.MINUS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ArithmeticParser.MINUS);
    } else {
        return this.getToken(ArithmeticParser.MINUS, i);
    }
};


SignedAtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArithmeticListener ) {
        listener.enterSignedAtom(this);
	}
};

SignedAtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArithmeticListener ) {
        listener.exitSignedAtom(this);
	}
};

SignedAtomContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArithmeticVisitor ) {
        return visitor.visitSignedAtom(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ArithmeticParser.SignedAtomContext = SignedAtomContext;

ArithmeticParser.prototype.signedAtom = function() {

    var localctx = new SignedAtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ArithmeticParser.RULE_signedAtom);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 67;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ArithmeticParser.PLUS || _la===ArithmeticParser.MINUS) {
            this.state = 64;
            _la = this._input.LA(1);
            if(!(_la===ArithmeticParser.PLUS || _la===ArithmeticParser.MINUS)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 69;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 70;
        this.atom();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AtomContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArithmeticParser.RULE_atom;
    this.scientificValue = null; // ScientificContext
    this.variableValue = null; // VariableContext
    return this;
}

AtomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AtomContext.prototype.constructor = AtomContext;

AtomContext.prototype.scientific = function() {
    return this.getTypedRuleContext(ScientificContext,0);
};

AtomContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

AtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArithmeticListener ) {
        listener.enterAtom(this);
	}
};

AtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArithmeticListener ) {
        listener.exitAtom(this);
	}
};

AtomContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArithmeticVisitor ) {
        return visitor.visitAtom(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ArithmeticParser.AtomContext = AtomContext;

ArithmeticParser.prototype.atom = function() {

    var localctx = new AtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, ArithmeticParser.RULE_atom);
    try {
        this.state = 74;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ArithmeticParser.SCIENTIFIC_NUMBER:
            this.enterOuterAlt(localctx, 1);
            this.state = 72;
            localctx.scientificValue = this.scientific();
            break;
        case ArithmeticParser.VARIABLE:
            this.enterOuterAlt(localctx, 2);
            this.state = 73;
            localctx.variableValue = this.variable();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ScientificContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArithmeticParser.RULE_scientific;
    return this;
}

ScientificContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ScientificContext.prototype.constructor = ScientificContext;

ScientificContext.prototype.SCIENTIFIC_NUMBER = function() {
    return this.getToken(ArithmeticParser.SCIENTIFIC_NUMBER, 0);
};

ScientificContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArithmeticListener ) {
        listener.enterScientific(this);
	}
};

ScientificContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArithmeticListener ) {
        listener.exitScientific(this);
	}
};

ScientificContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArithmeticVisitor ) {
        return visitor.visitScientific(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ArithmeticParser.ScientificContext = ScientificContext;

ArithmeticParser.prototype.scientific = function() {

    var localctx = new ScientificContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, ArithmeticParser.RULE_scientific);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 76;
        this.match(ArithmeticParser.SCIENTIFIC_NUMBER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VariableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArithmeticParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.VARIABLE = function() {
    return this.getToken(ArithmeticParser.VARIABLE, 0);
};

VariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArithmeticListener ) {
        listener.enterVariable(this);
	}
};

VariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArithmeticListener ) {
        listener.exitVariable(this);
	}
};

VariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArithmeticVisitor ) {
        return visitor.visitVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ArithmeticParser.VariableContext = VariableContext;

ArithmeticParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, ArithmeticParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 78;
        this.match(ArithmeticParser.VARIABLE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


ArithmeticParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 0:
			return this.logicExpression_sempred(localctx, predIndex);
	case 3:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

ArithmeticParser.prototype.logicExpression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

ArithmeticParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 1:
			return this.precpred(this._ctx, 6);
		case 2:
			return this.precpred(this._ctx, 5);
		case 3:
			return this.precpred(this._ctx, 4);
		case 4:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.ArithmeticParser = ArithmeticParser;
