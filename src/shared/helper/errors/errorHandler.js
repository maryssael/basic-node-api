function errorHandler(err = {}, req, res) {
  if (!err.statusCode || !err.message) {
    return res.status(500).send('Something went wrong');
  }

  return res.status(err.statusCode).send(err.message);
}

module.exports = errorHandler;
