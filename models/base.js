const connection = require('../mysql')
const { formatSqlCondition } = require('../libs/util')

class Base {
    constructor(props){
        // 表名
        this.table = props
    }

    // 格式化 sql 条件， 如果是 undefined、''、null 等就过滤掉该条件
    formatSqlCondition(condition) {
        return formatSqlCondition(condition)
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
    sql(...sqlArguments) {
        return new Promise((resolve, reject) => {
            connection.query(...sqlArguments, function (error, results, fields) {
                if (error) reject(error);
                resolve({results, fields})
            });
        })
    }

}

module.exports = Base;