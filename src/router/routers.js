const express = require('express');
const authController = require('../controller/auth.controller');
const router = express.Router();

router.get('/', authController.index);
router.post('/register', authController.register);

module.exports = router;