const express = require('express');

const router = express.Router();

const { validateJwt } = require('../../../shared/middlewares/auth');
const factory = require('../factories/example');

const exampleController = factory.getExampleController();

router.get(
  '/',
  [validateJwt],
  (...args) => exampleController.get(...args)
);

router.get(
  '/:id',
  [validateJwt],
  (...args) => exampleController.getById(...args)
);

router.post(
  '/',
  [validateJwt],
  (...args) => exampleController.create(...args)
);

router.put(
  '/:id',
  [validateJwt],
  (...args) => exampleController.update(...args)
);

router.delete(
  '/:id',
  [validateJwt],
  (...args) => exampleController.del(...args)
);

module.exports = router;
