require('dotenv').config();

// Server core
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

// Middlewares
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const cors = require('cors');

// Start express
const app = express();

app.use(morgan('combined'));
app.use(helmet());
app.use(bodyParser.json());
app.use(cookieParser());

// CORS
// const frontURL = process.env.FRONTURL;
// app.use(cors({
//   credentials: true,
//   origin: [frontURL]
// }));

app.use(require('./router'));

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`); // eslint-disable-line no-console
});

module.exports = app;
