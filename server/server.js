const express = require('express');
const app = express();
const readline = require('readline');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const routes = require("./routes");
const logger = require('./utilities/logger');

const PORT = process.env.PORT || 3000;
const API_VERSION = "/v1";

app.use(morgan('dev'));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// reporter route
app.use('/report-check', express.static('report'));
// service routes
app.use(API_VERSION, routes);

// setup server
const server = app.listen(PORT, () => {
  require("./utilities/api-table")(app._router.stack); // eslint-disable-line global-require, no-underscore-dangle
  logger.log("server ready on http://localhost:" + PORT);
});

// exit gracefully
const exit = () => {
  logger.log("Closing server...");
  server.close(() => {
    // server is closed, close other connections like DB, REDIS, etc
    logger.log("Server was closed!");
    process.exit(0);
  });
};

// emit SIGINT on windows machine
if (process.platform === "win32") {
  // windows server
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.on("SIGINT", () => {
    process.emit("SIGINT");
  });
}

// graceful shutdown on windows
process.on("SIGINT", () => exit());

// graceful shutdown on unix
process.on("SIGTERM", () => exit());

// needed for tests
exports.exit = exit;
exports.server = app;
exports.serverPort = PORT;
exports.apiVersion = API_VERSION;
