const express = require('express');

const router = express.Router();
const factory = require('../factories/base');

const controller = factory.getBaseController();

router.get('/', (...args) => controller.get(...args));

router.get('/:id', (...args) => controller.getById(...args));

router.post('/', (...args) => controller.create(...args));

router.put('/:id', (...args) => controller.update(...args));

router.delete('/:id', (...args) => controller.del(...args));

module.exports = router;
