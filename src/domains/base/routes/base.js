const express = require('express');

const router = express.Router();
const db = require('../../../db/index');

const BaseSQLRepository = require('../BaseSQLRepository');

const repository = new BaseSQLRepository({ dbConnector: db, tableName: 'tbl_test' });

router.post('/', async (req, res, next) => {
  try {
    const result = await repository.create({ data: { first_name: 'mu', last_name: 'dois' } });
    console.log('ZA', result);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
