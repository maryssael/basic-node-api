const express = require('express');

const router = express.Router();

const { authController } = require('../factories/auth');

router.post(
  '/signup',
  (...args) => authController.signup(...args)
);

router.post(
  '/login',
  (...args) => authController.login(...args)
);

module.exports = router;
