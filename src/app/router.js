const express = require('express');

const router = express.Router();

router.get('/health-check', (req, res) => res.send('Hello there!'));

router.use('/auth', require('../domains/auth/routes/auth'));
router.use('/examples', require('../domains/example/routes/example'));

module.exports = router;
