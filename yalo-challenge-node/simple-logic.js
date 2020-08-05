const LogicExpressionProcessor = require('./lib/LogicExpressionProcessor');


let processor = new LogicExpressionProcessor();

let result = processor.process(
    "2 == 2",
    {}
);

console.log(result);