const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user')

router.get('/', function(req, res, next) {
  res.render('index', { title: '222' });
});

router.get('/get_user', UserController.getUser)

module.exports = router;
