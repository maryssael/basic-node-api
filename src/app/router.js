const express = require('express');

const router = express.Router();

router.use('/auth', require('../domains/auth/routes/auth'));
router.use('/base', require('../domains/base/routes/base'));

module.exports = router;
