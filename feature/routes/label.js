const express = require('express');
const router = express.Router();

const labelController = require('../controllers/labelController');

router.get('/', labelController.findAllLabels);

module.exports = router;
