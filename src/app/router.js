const express = require('express');

const router = express.Router();

router.use('/auth', require('../domains/auth/routes/auth'));
router.use('/example', require('../domains/example/routes/example'));

module.exports = router;
