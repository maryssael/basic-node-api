require('dotenv').config();

// Server core
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

// Middlewares
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Start express
const app = express();

app.use(cors());
app.use(morgan('combined'));
app.use(helmet());
app.use(bodyParser.json());
app.use(cookieParser());

app.use(require('./router'));

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`); // eslint-disable-line no-console
});

module.exports = app;
