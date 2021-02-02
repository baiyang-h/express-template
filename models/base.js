const connection = require('../mysql')

class Base {
    constructor(props){
        // 表名
        this.table = props
    }

    // 增
    insert() {

    }

    // 删
    delete() {

    }

    // 改
    update() {

    }

    // 查
    select() {
        connection.query('SELECT * FROM `user`', function (error, results, fields) {
            console.log(1, error)
            console.log(2, results)
            console.log(3, fields)
        });
    }


}

module.exports = Base;