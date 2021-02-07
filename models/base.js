const connection = require('../mysql')

class Base {
    constructor(props){
        // 表名
        this.table = props
    }

    // 增
    insert(tableName, dict) {
        const keys = Object.keys(dict);
        const values = Object.values(dict);
        const sql = `INSERT INTO ${tableName} (${keys.join(',')}) VALUES (${values.join(',')})`;
        return this.sql(sql)
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