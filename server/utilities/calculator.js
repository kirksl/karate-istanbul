// simple calculator

const parser = require('./parser');

const sum = (a, b) => parser.input(a) + parser.input(b);
const subtract = (a, b) => parser.input(a) - parser.input(b);
const divide = (a, b) => parser.output(parser.input(a) / parser.input(b)); // protect from divide by 0
const multiply = (a, b) => parser.input(a) * parser.input(b);

exports.sum = sum;
exports.subtract = subtract;
exports.divide = divide;
exports.multiply = multiply;
