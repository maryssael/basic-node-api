const express = require('express');

const router = express.Router();
const db = require('../../../db/index');

router.get('/', async (req, res, next) => {
  try {
    const result = await db('testing').select('*');
    console.log('Test', result);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
