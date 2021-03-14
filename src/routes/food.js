import express from 'express'
import FoodController from '../controllers/food'

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/get_data', FoodController.getFoodData)

export default router;
