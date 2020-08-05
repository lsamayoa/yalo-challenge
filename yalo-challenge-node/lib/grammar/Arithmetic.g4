grammar Arithmetic;

logicExpression
    : leftLogic=logicExpression logicOperator=logicop rightLogic=logicExpression
    | LPAREN parentesisValue=logicExpression RPAREN
    | left=expression operator=relop right=expression
    ;

logicop
   : EQ
   | NEQ
   | AND
   | OR
   ;

relop
   : EQ
   | NEQ
   | GT
   | GTE
   | LT
   | LTE
   ;

expression
   :  left=expression  operator=POW            right=expression
   |  left=expression  operator=(TIMES | DIV)  right=expression
   |  left=expression  operator=(PLUS | MINUS) right=expression
   |  LPAREN parentesisValue=expression RPAREN
   |  factorialValue=expression FACT
   |  signedValue=signedAtom
   ;

signedAtom
  : (PLUS | MINUS)* atom
  ;
atom
   : scientificValue=scientific
   | variableValue=variable
   ;

scientific
   : SCIENTIFIC_NUMBER
   ;

variable
   : VARIABLE
   ;

VARIABLE
   : VALID_ID_START VALID_ID_CHAR*
   ;


fragment VALID_ID_START
   : ('a' .. 'z') | ('A' .. 'Z') | '_'
   ;


fragment VALID_ID_CHAR
   : VALID_ID_START | ('0' .. '9')
   ;

//The NUMBER part gets its potential sign from "(PLUS | MINUS)* atom" in the expression rule
SCIENTIFIC_NUMBER
   : NUMBER (E SIGN? UNSIGNED_INTEGER)?
   ;

fragment NUMBER
   : ('0' .. '9') + ('.' ('0' .. '9') +)?
   ;

fragment UNSIGNED_INTEGER
   : ('0' .. '9')+
   ;

fragment E
   : 'E' | 'e'
   ;


fragment SIGN
   : ('+' | '-')
   ;


LPAREN
   : '('
   ;


RPAREN
   : ')'
   ;


PLUS
   : '+'
   ;


MINUS
   : '-'
   ;


TIMES
   : '*'
   ;


DIV
   : '/'
   ;

POINT
   : '.'
   ;

POW
   : '^'
   | '**'
   ;

FACT
  : '!'
  ;

GTE
   : '>='
   ;

LTE
   : '<='
   ;

GT
   : '>'
   ;

LT
   : '<'
   ;

EQ
   : '=='
   ;

NEQ
   : '!='
   ;

AND
   : '&&'
   ;

OR
   : '||'
   ;

WS
   : [ \r\n\t] + -> skip
   ;