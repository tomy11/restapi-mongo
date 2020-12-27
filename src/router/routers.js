const express = require('express');
const Auth = require('../models/auth.model');
const authController = require('../controller/auth.controller');
const router = express.Router();

router.get('/', authController.index);
router.post('/register', authController.register);

module.exports = router;