const express = require('express');
const router = express.Router();
const barangjnsController = require('../controllers/barangjnsController');

router.get('/barangjns', barangjnsController.getAllBarangjns);

module.exports = router;
