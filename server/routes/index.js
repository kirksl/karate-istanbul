const fs = require("fs");
const router = require("express").Router();

fs.readdirSync(__dirname).forEach(file => {
  if (file !== "index.js") {
    const name = file.substr(0, file.indexOf("."));
    router.use(require(`./${name}`)); // eslint-disable-line global-require, import/no-dynamic-require
  }
});

module.exports = router;
