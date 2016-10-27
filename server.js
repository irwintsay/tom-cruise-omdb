require('dotenv').config();
// NPM Dependencies
const express = require('express');
const logger = require('morgan');

// Express web application
const app = express();

// Routing
const router = require('./router/api');
// This line tells my Express app to route '/api' requests to `router` which is defined above
app.use('/api', router);

// Logs
app.use(logger('dev'));

// Port number
const port = process.env.PORT || 3000;
// Finally, tell my Express app to listen to `port`
app.listen(port, function(req, res) {
  console.log('Server is listening port ',port);
});