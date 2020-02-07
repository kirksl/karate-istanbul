const fs = require('fs');

const srv = {};
fs.readdirSync(__dirname).forEach(file => {
  if (file !== 'index.js') {
    const name = file.substr(0, file.indexOf('.'));
    srv[name] = require(`./${name}`); // eslint-disable-line global-require, import/no-dynamic-require
  }
});

module.exports = srv;
