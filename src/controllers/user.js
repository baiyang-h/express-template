// 引用用户模版数据
import { user } from '../models'

const UserController = {
    // 增
    async addUser(req, res, next){
        try {
            const {results, fields} = await user.sql(`INSERT INTO user (name, phone) VALUES ('abc', '123')`)
            res.json({
                code: 200,
                message: "操作成功",
            })
        } catch (e) {
            res.json({ code: 0, message: "操作失败", data: e })
        }
    },

    // 查
    async getUser(req, res, next){
        try {
            const {results, fields} = await user.sql('SELECT * FROM user')
            res.json({
                code: 200,
                message: "操作成功",
                data: results
            })
        } catch (e) {
            res.json({ code: 0, message: "操作失败", data: e })
        }
    },

}

export default UserController
