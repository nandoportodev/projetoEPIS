const express = require('express');
const router = express.Router();
const episController = require('../controllers/episController');

router.post('/', episController.cadastrarEPI);
router.get('/', episController.listarEPIs);

module.exports = router;
