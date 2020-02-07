const router = require('express').Router();
const calculator = require('./../utilities/calculator');

const circumference = (req, res) => {
    const result = calculator.multiply(req.params.a, 2);
    res.send({ result: calculator.multiply(result, Math.PI) });
};

router.get('/circumference/:a', circumference);

module.exports = router;
