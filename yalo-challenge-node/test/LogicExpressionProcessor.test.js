const test = require('ava');
const LogicExpressionProcessor = require('../lib/LogicExpressionProcessor');

const processor = new LogicExpressionProcessor();

test('process && operations', t => {
    t.is(true, processor.process("abc && xyz", { xyz : true, abc: true }));
});

test('process || operations', t => {
    t.is(true, processor.process("abc || xyz", { xyz : true, abc: true }));
});

test('process == operations', t => {
    t.is(false, processor.process("abc == xyz", { xyz : 10, abc: 20 }));
});

test('process != operations', t => {
    t.is(true, processor.process("abc != xyz", { xyz : 10, abc: 20 }));
});

test('process > operations', t => {
    t.is(true, processor.process("abc > xyz", { xyz : 10, abc: 20 }));
});

test('process < operations', t => {
    t.is(false, processor.process("abc < xyz", { xyz : 10, abc: 20 }));
});

test('process <= operations', t => {
    t.is(true, processor.process("abc <= xyz", { xyz : 20, abc: 20 }));
});

test('process >= operations', t => {
    t.is(true, processor.process("abc >= xyz", { xyz : 20, abc: 20 }));
});