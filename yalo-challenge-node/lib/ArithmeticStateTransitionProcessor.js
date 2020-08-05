const ArithmeticExpressionProcessor = require('./ArithmeticExpressionProcessor')

class ArithmeticStateTransitionProcessor {

    constructor(){
        this.arithmeticExpressionProcessor = new ArithmeticExpressionProcessor();
    }

    process(request){
        let expression = request.expression;
        let save = request.save;
        let context = request.context;
        try {
            let result = this.arithmeticExpressionProcessor.process(expression, context)
            return {
                transition: request.transitions.next,
                [save]: result
            };
        } catch (error) {
            console.log(error);
            return {
                [save]: error,
                transition: request.transitions.error
            };
        }
    }
}

module.exports = ArithmeticStateTransitionProcessor;