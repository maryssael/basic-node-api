const express = require('express');

const router = express.Router();

const { signupSchema } = require('../schemas/signup');
const { schemaValidator } = require('../../../shared/middlewares/schema-validator');
const { authController } = require('../factories/auth');

router.post(
  '/signup',
  [schemaValidator(signupSchema)],
  (...args) => authController.signup(...args)
);

router.post(
  '/login',
  (...args) => authController.login(...args)
);

module.exports = router;
