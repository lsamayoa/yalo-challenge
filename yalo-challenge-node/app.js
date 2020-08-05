const ArithmeticStateTransitionProcessor = require('./lib/ArithmeticStateTransitionProcessor');
const LogicStateTransitionProcessor = require('./lib/LogicStateTransitionProcessor');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const arithmeticStateProcessor = new ArithmeticStateTransitionProcessor();
const logicStateTransitionProcessor = new LogicStateTransitionProcessor();

app.use(bodyParser.json());

app.post('/arithmetic', (req, res) => {
    res.send(arithmeticStateProcessor.process(req.body));
});

app.post('/logic', (req, res) => {
    res.send(logicStateTransitionProcessor.process(req.body));
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});