
const LogicExpressionProcessor = require('./LogicExpressionProcessor')

class LogicStateTransitionProcesor {

    constructor(){
        this.logicExpressionProcessor = new LogicExpressionProcessor();
    }

    process(request){
        let expression = request.expression;
        let save = request.save;
        let context = request.context;
        try {
            let result = this.logicExpressionProcessor.process(expression, context);
            let transitionStatus = result ? request.transition.isTrue : request.transition.isFalse;
            return {
                transition: transitionStatus,
                [save]: result
            };
        } catch (error) {
            console.log(error);
            return {
                [save]: error,
                transition: request.transition.isError
            };
        }
    }
}

module.exports = LogicStateTransitionProcesor;