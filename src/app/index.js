require('dotenv').config();

// Server core
const express = require('express');
// const helmet = require('helmet');
const morgan = require('morgan');

// Middlewares
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// connectionDB();

// Server config
const HTTP_PORT = process.env.PORT;

// Start express
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cookieParser());

// Endpoints
app.use('/base', require('../domains/base/routes/base'));

// Starting the server
app.listen(HTTP_PORT, () => {
  console.log(`Server is listening on port ${HTTP_PORT}`); // eslint-disable-line no-console
});

module.exports = app;
