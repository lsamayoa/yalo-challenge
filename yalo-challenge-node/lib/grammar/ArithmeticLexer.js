// Generated from Arithmetic.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0016\u0096\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0003\u0002\u0003\u0002\u0007\u0002:\n\u0002\f",
    "\u0002\u000e\u0002=\u000b\u0002\u0003\u0003\u0005\u0003@\n\u0003\u0003",
    "\u0004\u0003\u0004\u0005\u0004D\n\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0005\u0005I\n\u0005\u0003\u0005\u0003\u0005\u0005\u0005M\n\u0005",
    "\u0003\u0006\u0006\u0006P\n\u0006\r\u0006\u000e\u0006Q\u0003\u0006\u0003",
    "\u0006\u0006\u0006V\n\u0006\r\u0006\u000e\u0006W\u0005\u0006Z\n\u0006",
    "\u0003\u0007\u0006\u0007]\n\u0007\r\u0007\u000e\u0007^\u0003\b\u0003",
    "\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003",
    "\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011v",
    "\n\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016",
    "\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001b\u0006\u001b\u0091\n\u001b\r\u001b\u000e\u001b",
    "\u0092\u0003\u001b\u0003\u001b\u0002\u0002\u001c\u0003\u0003\u0005\u0002",
    "\u0007\u0002\t\u0004\u000b\u0002\r\u0002\u000f\u0002\u0011\u0002\u0013",
    "\u0005\u0015\u0006\u0017\u0007\u0019\b\u001b\t\u001d\n\u001f\u000b!",
    "\f#\r%\u000e\'\u000f)\u0010+\u0011-\u0012/\u00131\u00143\u00155\u0016",
    "\u0003\u0002\u0006\u0005\u0002C\\aac|\u0004\u0002GGgg\u0004\u0002--",
    "//\u0005\u0002\u000b\f\u000f\u000f\"\"\u0002\u0099\u0002\u0003\u0003",
    "\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u0013\u0003",
    "\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003",
    "\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003",
    "\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003",
    "\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002",
    "\u0002\u0002\u0002%\u0003\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002",
    "\u0002\u0002)\u0003\u0002\u0002\u0002\u0002+\u0003\u0002\u0002\u0002",
    "\u0002-\u0003\u0002\u0002\u0002\u0002/\u0003\u0002\u0002\u0002\u0002",
    "1\u0003\u0002\u0002\u0002\u00023\u0003\u0002\u0002\u0002\u00025\u0003",
    "\u0002\u0002\u0002\u00037\u0003\u0002\u0002\u0002\u0005?\u0003\u0002",
    "\u0002\u0002\u0007C\u0003\u0002\u0002\u0002\tE\u0003\u0002\u0002\u0002",
    "\u000bO\u0003\u0002\u0002\u0002\r\\\u0003\u0002\u0002\u0002\u000f`\u0003",
    "\u0002\u0002\u0002\u0011b\u0003\u0002\u0002\u0002\u0013d\u0003\u0002",
    "\u0002\u0002\u0015f\u0003\u0002\u0002\u0002\u0017h\u0003\u0002\u0002",
    "\u0002\u0019j\u0003\u0002\u0002\u0002\u001bl\u0003\u0002\u0002\u0002",
    "\u001dn\u0003\u0002\u0002\u0002\u001fp\u0003\u0002\u0002\u0002!u\u0003",
    "\u0002\u0002\u0002#w\u0003\u0002\u0002\u0002%y\u0003\u0002\u0002\u0002",
    "\'|\u0003\u0002\u0002\u0002)\u007f\u0003\u0002\u0002\u0002+\u0081\u0003",
    "\u0002\u0002\u0002-\u0083\u0003\u0002\u0002\u0002/\u0086\u0003\u0002",
    "\u0002\u00021\u0089\u0003\u0002\u0002\u00023\u008c\u0003\u0002\u0002",
    "\u00025\u0090\u0003\u0002\u0002\u00027;\u0005\u0005\u0003\u00028:\u0005",
    "\u0007\u0004\u000298\u0003\u0002\u0002\u0002:=\u0003\u0002\u0002\u0002",
    ";9\u0003\u0002\u0002\u0002;<\u0003\u0002\u0002\u0002<\u0004\u0003\u0002",
    "\u0002\u0002=;\u0003\u0002\u0002\u0002>@\t\u0002\u0002\u0002?>\u0003",
    "\u0002\u0002\u0002@\u0006\u0003\u0002\u0002\u0002AD\u0005\u0005\u0003",
    "\u0002BD\u00042;\u0002CA\u0003\u0002\u0002\u0002CB\u0003\u0002\u0002",
    "\u0002D\b\u0003\u0002\u0002\u0002EL\u0005\u000b\u0006\u0002FH\u0005",
    "\u000f\b\u0002GI\u0005\u0011\t\u0002HG\u0003\u0002\u0002\u0002HI\u0003",
    "\u0002\u0002\u0002IJ\u0003\u0002\u0002\u0002JK\u0005\r\u0007\u0002K",
    "M\u0003\u0002\u0002\u0002LF\u0003\u0002\u0002\u0002LM\u0003\u0002\u0002",
    "\u0002M\n\u0003\u0002\u0002\u0002NP\u00042;\u0002ON\u0003\u0002\u0002",
    "\u0002PQ\u0003\u0002\u0002\u0002QO\u0003\u0002\u0002\u0002QR\u0003\u0002",
    "\u0002\u0002RY\u0003\u0002\u0002\u0002SU\u00070\u0002\u0002TV\u0004",
    "2;\u0002UT\u0003\u0002\u0002\u0002VW\u0003\u0002\u0002\u0002WU\u0003",
    "\u0002\u0002\u0002WX\u0003\u0002\u0002\u0002XZ\u0003\u0002\u0002\u0002",
    "YS\u0003\u0002\u0002\u0002YZ\u0003\u0002\u0002\u0002Z\f\u0003\u0002",
    "\u0002\u0002[]\u00042;\u0002\\[\u0003\u0002\u0002\u0002]^\u0003\u0002",
    "\u0002\u0002^\\\u0003\u0002\u0002\u0002^_\u0003\u0002\u0002\u0002_\u000e",
    "\u0003\u0002\u0002\u0002`a\t\u0003\u0002\u0002a\u0010\u0003\u0002\u0002",
    "\u0002bc\t\u0004\u0002\u0002c\u0012\u0003\u0002\u0002\u0002de\u0007",
    "*\u0002\u0002e\u0014\u0003\u0002\u0002\u0002fg\u0007+\u0002\u0002g\u0016",
    "\u0003\u0002\u0002\u0002hi\u0007-\u0002\u0002i\u0018\u0003\u0002\u0002",
    "\u0002jk\u0007/\u0002\u0002k\u001a\u0003\u0002\u0002\u0002lm\u0007,",
    "\u0002\u0002m\u001c\u0003\u0002\u0002\u0002no\u00071\u0002\u0002o\u001e",
    "\u0003\u0002\u0002\u0002pq\u00070\u0002\u0002q \u0003\u0002\u0002\u0002",
    "rv\u0007`\u0002\u0002st\u0007,\u0002\u0002tv\u0007,\u0002\u0002ur\u0003",
    "\u0002\u0002\u0002us\u0003\u0002\u0002\u0002v\"\u0003\u0002\u0002\u0002",
    "wx\u0007#\u0002\u0002x$\u0003\u0002\u0002\u0002yz\u0007@\u0002\u0002",
    "z{\u0007?\u0002\u0002{&\u0003\u0002\u0002\u0002|}\u0007>\u0002\u0002",
    "}~\u0007?\u0002\u0002~(\u0003\u0002\u0002\u0002\u007f\u0080\u0007@\u0002",
    "\u0002\u0080*\u0003\u0002\u0002\u0002\u0081\u0082\u0007>\u0002\u0002",
    "\u0082,\u0003\u0002\u0002\u0002\u0083\u0084\u0007?\u0002\u0002\u0084",
    "\u0085\u0007?\u0002\u0002\u0085.\u0003\u0002\u0002\u0002\u0086\u0087",
    "\u0007#\u0002\u0002\u0087\u0088\u0007?\u0002\u0002\u00880\u0003\u0002",
    "\u0002\u0002\u0089\u008a\u0007(\u0002\u0002\u008a\u008b\u0007(\u0002",
    "\u0002\u008b2\u0003\u0002\u0002\u0002\u008c\u008d\u0007~\u0002\u0002",
    "\u008d\u008e\u0007~\u0002\u0002\u008e4\u0003\u0002\u0002\u0002\u008f",
    "\u0091\t\u0005\u0002\u0002\u0090\u008f\u0003\u0002\u0002\u0002\u0091",
    "\u0092\u0003\u0002\u0002\u0002\u0092\u0090\u0003\u0002\u0002\u0002\u0092",
    "\u0093\u0003\u0002\u0002\u0002\u0093\u0094\u0003\u0002\u0002\u0002\u0094",
    "\u0095\b\u001b\u0002\u0002\u00956\u0003\u0002\u0002\u0002\u000e\u0002",
    ";?CHLQWY^u\u0092\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function ArithmeticLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

ArithmeticLexer.prototype = Object.create(antlr4.Lexer.prototype);
ArithmeticLexer.prototype.constructor = ArithmeticLexer;

Object.defineProperty(ArithmeticLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

ArithmeticLexer.EOF = antlr4.Token.EOF;
ArithmeticLexer.VARIABLE = 1;
ArithmeticLexer.SCIENTIFIC_NUMBER = 2;
ArithmeticLexer.LPAREN = 3;
ArithmeticLexer.RPAREN = 4;
ArithmeticLexer.PLUS = 5;
ArithmeticLexer.MINUS = 6;
ArithmeticLexer.TIMES = 7;
ArithmeticLexer.DIV = 8;
ArithmeticLexer.POINT = 9;
ArithmeticLexer.POW = 10;
ArithmeticLexer.FACT = 11;
ArithmeticLexer.GTE = 12;
ArithmeticLexer.LTE = 13;
ArithmeticLexer.GT = 14;
ArithmeticLexer.LT = 15;
ArithmeticLexer.EQ = 16;
ArithmeticLexer.NEQ = 17;
ArithmeticLexer.AND = 18;
ArithmeticLexer.OR = 19;
ArithmeticLexer.WS = 20;

ArithmeticLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

ArithmeticLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

ArithmeticLexer.prototype.literalNames = [ null, null, null, "'('", "')'", 
                                           "'+'", "'-'", "'*'", "'/'", "'.'", 
                                           null, "'!'", "'>='", "'<='", 
                                           "'>'", "'<'", "'=='", "'!='", 
                                           "'&&'", "'||'" ];

ArithmeticLexer.prototype.symbolicNames = [ null, "VARIABLE", "SCIENTIFIC_NUMBER", 
                                            "LPAREN", "RPAREN", "PLUS", 
                                            "MINUS", "TIMES", "DIV", "POINT", 
                                            "POW", "FACT", "GTE", "LTE", 
                                            "GT", "LT", "EQ", "NEQ", "AND", 
                                            "OR", "WS" ];

ArithmeticLexer.prototype.ruleNames = [ "VARIABLE", "VALID_ID_START", "VALID_ID_CHAR", 
                                        "SCIENTIFIC_NUMBER", "NUMBER", "UNSIGNED_INTEGER", 
                                        "E", "SIGN", "LPAREN", "RPAREN", 
                                        "PLUS", "MINUS", "TIMES", "DIV", 
                                        "POINT", "POW", "FACT", "GTE", "LTE", 
                                        "GT", "LT", "EQ", "NEQ", "AND", 
                                        "OR", "WS" ];

ArithmeticLexer.prototype.grammarFileName = "Arithmetic.g4";


exports.ArithmeticLexer = ArithmeticLexer;

