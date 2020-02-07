const router = require('express').Router();
const calculator = require('./../utilities/calculator');

const reply = (res, message) => res.status(200).send({ result: message });

const sum = (req, res) => reply(res, calculator.sum(req.params.a, req.params.b));
const subtract = (req, res) => reply(res, calculator.subtract(req.params.a, req.params.b));
const multiply = (req, res) => reply(res, calculator.multiply(req.params.a, req.params.b));
const divide = (req, res) => reply(res, calculator.divide(req.params.a, req.params.b));

router.get('/sum/:a/:b', sum);
router.get('/subtract/:a/:b', subtract);
router.get('/multiply/:a/:b', multiply);
router.get('/divide/:a/:b', divide);

module.exports = router;
