const express = require('express')
const userController = require('../controllers/userController')

const router = express.Router();

router.get('/books', userController.getTopics);
router.post('/signup', userController.signupUser);
router.post('/login', userController.loginUser);

module.exports = router;
