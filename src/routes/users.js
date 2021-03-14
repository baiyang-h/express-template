import express from 'express'
import UserController from '../controllers/user'

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/get_user', UserController.getUser)
router.get('/add_user', UserController.addUser)


export default router;
