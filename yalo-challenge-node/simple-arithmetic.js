const ArithmeticExpressionProcessor = require('./lib/ArithmeticExpressionProcessor');


let processor = new ArithmeticExpressionProcessor();

let result = processor.process(
    "2 + 2 + abc",
    { abc: 123}
);

console.log(result);