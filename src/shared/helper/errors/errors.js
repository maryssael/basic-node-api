const CustomError = require('./CustomError');

const errors = {
  generic: {
    generic: () => new CustomError({
      statusCode: 500,
      message: 'Something went wrong'
    })
  },
  auth: {
    invalidUserInformation: () => new CustomError({
      statusCode: 400,
      message: 'Invalid user information'
    })
  }
};

module.exports = errors;
