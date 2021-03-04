/* eslint-disable func-names */
function schemaValidator(schema) {
  return function (req, res, next) {
    const data = req.body;

    const { error } = schema.validate(data, { abortEarly: false });

    if (!error) {
      return next();
    }

    const { details } = error;
    const errors = details.map(err => err.message);

    return res.status(400).send(errors);
  };
}

module.exports = { schemaValidator };
