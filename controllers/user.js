// 引用用户模版数据
const { user } = require('../models');

const UserController = {
    // showUser 获取用户数据并返回到页面
    async getUser(req, res, next){
        user.select()
        res.json({
            code: 200,
            message: "操作成功",
        })
        // try{
        //     let userData = await user.select()
        //     res.json({
        //         code: 200,
        //         message: "操作成功",
        //         data: userData
        //     })
        // }catch(e){
        //     res.json({ code: 0, message: "操作失败", data: e })
        // }
    },
}

module.exports = UserController;