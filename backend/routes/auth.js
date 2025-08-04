const express = require('express');
const router = express.Router();
const {register, login} = require('../controllers/userController');
const authenticate = require('../middleware/authMiddleware');
const { getUser } = require('../controllers/userController');

router.post('/register', register);
router.post('/login', login);
router.get('/home', authenticate, getUser);

module.exports = router;

