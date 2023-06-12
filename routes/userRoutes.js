const express = require('express');
const UserController = require('../controllers/userController')
const router = express.Router();

router.get('/api/v1/users', UserController.getAllUsers)
router.post('/api/v1/user/signup', UserController.signUp)
router.post('/api/v1/user/signin', UserController.signIn)

module.exports = router;
