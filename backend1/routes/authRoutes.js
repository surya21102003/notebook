const express = require('express');
const router = express.Router();
const { signup, verifyOTP } = require('../controllers/authController');

router.post('/signup', signup);
router.post('/verify-otp', verifyOTP);

module.exports = router;
