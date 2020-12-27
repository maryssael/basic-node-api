class CustomError extends Error {
  constructor(err, ...params) {
    super(...params);

    this.statusCode = err.statusCode || 500;
    this.message = err.message || 'Something went wrong';
  }
}

module.exports = CustomError;
