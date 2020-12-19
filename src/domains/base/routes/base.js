const express = require('express');

const router = express.Router();
const db = require('../../../db/index');

const BaseSQLRepository = require('../BaseSQLRepository');

const repository = new BaseSQLRepository({ dbConnector: db, tableName: 'tbl_test' });

router.get('/', async (req, res) => {
  try {
    const result = await repository.get({});

    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const result = await repository.getById({ id });

    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const { body } = req;

    const result = await repository.create({ data: body });

    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const result = await repository.update({ id, data: body });

    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    await repository.delete({ id });

    res.status(204);
    res.end();
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
