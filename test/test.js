const server = require('../.nyc_instrumented/server/server.js');

const execa = require('execa');
const path = require('path');
const mkdirp = require('mkdirp');
const uuid = require('uuid/v4');
const fs = require('fs');

(async () =>
{
    try
    {
        let test = process.argv[2] || __dirname;
        console.log(`Running test ${test}`);

        await execa('java', ['-cp', path.join(__dirname, 'karate.jar'), 'com.intuit.karate.Main', '-t', '~@ignore', test]);

        await mkdirp('.nyc_output');
        
        let output = path.resolve('.nyc_output', `${uuid()}.json`);
        fs.writeFileSync(output, JSON.stringify(global.__coverage__), { encoding: 'utf8' });
    }
    catch(e)
    {
        console.log(e);
    }
    finally
    {
        server.exit();
    }
})();