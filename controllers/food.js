// 引用用户模版数据
const { food } = require('../models');

const FoodController = {
    async getFoodData(req, res, next) {

        // 分页
        const page = req.query.page || 1
        const pageSize = req.query.pageSize || 20

        try {
            const [result1, result2] = await Promise.all([
                // 分页数据
                food.sql(`SELECT * FROM food LIMIT ${(page-1)*pageSize}, ${pageSize}`),
                // 总数
                food.sql(`SELECT count(*) as total FROM food`)
            ])
            res.json({
                code: 200,
                message: "操作成功",
                data: {
                    list: result1,
                    total: result2.results[0].total
                },

            })
        } catch (e) {
            res.json({ code: 0, message: "操作失败", data: e })
        }

    }
}

module.exports = FoodController;