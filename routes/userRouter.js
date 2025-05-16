const express = require('express');
const { route } = require('./ticketsRouter');
const { signUp } = require('../api/signup');
const { login } = require('../api/login');
const { verifyToken } = require('../middleware/auth');
const router = express.Router()


router.route("/signup").post(signUp);
router.route("/login").post( verifyToken, login);

module.exports = router;