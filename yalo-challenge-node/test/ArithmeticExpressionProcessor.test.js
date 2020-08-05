const test = require('ava');
const ArithmeticExpressionProcessor = require('../lib/ArithmeticExpressionProcessor');

const processor = new ArithmeticExpressionProcessor();

test('process SUM operations', t => {
    t.is(5, processor.process("2+3", {}));
});

test('process DIV operations', t => {
    t.is(1, processor.process("4/4", {}));
});

test('process MULT operations', t => {
    t.is(12, processor.process("3*4", {}));
});

test('process SUB operations', t => {
    t.is(-1, processor.process("3-4", {}));
});

test('process POW operations', t => {
    t.is(81, processor.process("3**4", {}));
});

test('process POW(^) operations', t => {
    t.is(81, processor.process("3^4", {}));
});