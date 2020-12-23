const express = require('express');

const router = express.Router();
const factory = require('../factories/base');
const { validateJwt } = require('../../../shared/middlewares/auth');

const controller = factory.getBaseController();

router.get(
  '/',
  [validateJwt],
  (...args) => controller.get(...args)
);

router.get(
  '/:id',
  [validateJwt],
  (...args) => controller.getById(...args)
);

router.post(
  '/',
  [validateJwt],
  (...args) => controller.create(...args)
);

router.put(
  '/:id',
  [validateJwt],
  (...args) => controller.update(...args)
);

router.delete(
  '/:id',
  [validateJwt],
  (...args) => controller.del(...args)
);

module.exports = router;
