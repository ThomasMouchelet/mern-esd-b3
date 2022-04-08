const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/auth.controller');

router.post('/auth/signup', AuthController.signup);

module.exports = router;