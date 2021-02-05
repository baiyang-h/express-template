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

    }

    // sql
    sql(sql) {
        return new Promise((resolve, reject) => {
            connection.query(sql, function (error, results, fields) {
                if (error) reject(error);
                resolve({results, fields})
            });
        })

    }

}

module.exports = Base;