var express = require('express');
var router = express.Router();
const UserController = require('../controllers/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/get_user', UserController.getUser)
router.get('/add_user', UserController.addUser)


module.exports = router;
