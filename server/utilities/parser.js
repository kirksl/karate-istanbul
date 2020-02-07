// simple parser as all inputs are received as string

const parseInput = input => {
    const result = parseFloat(input);
    return isNaN(result) || !isFinite(result) ? 0 : result;
}


const checkOutput = a => { 
    return parseInput(a);
};

exports.input = parseInput;
exports.output = checkOutput;
