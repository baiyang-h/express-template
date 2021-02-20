var express = require('express');
var router = express.Router();
const FoodController = require('../controllers/food')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/get_data', FoodController.getFoodData)


module.exports = router;
