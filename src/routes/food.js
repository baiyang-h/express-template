import express from 'express'
import FoodController from '../controllers/food'

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/get_data', FoodController.getFoodData)

export default router;

/**
 * @swagger
 * /food/get_data:
 *   post:
 *     description: 获取 food 数据列表信息
 *     tags: [food]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: page
 *         description: 页码
 *         in: query
 *         required: true
 *         type: number
 *       - name: pageSize
 *         description: 一页显示条数
 *         in: query
 *         required: true
 *         type: number
 *       - name: name
 *         description: 菜单名
 *         in: query
 *         type: string
 *       - name: tags
 *         description: 功效介绍
 *         in: query
 *         type: string
 *       - name: method
 *         description: 做菜方式
 *         in: query
 *         type: string
 *       - name: level
 *         description: 难易等级
 *         in: query
 *         type: string
 *     responses:
 *       200:
 *         description: successful
 */
