// 将查询 sql 的 where 条件中，对于值为 undefined、""、null 等时过滤掉
// xx=xx and xx=xx and xx=xx
exports.formatSqlCondition = function (condition={}) {
    let whereSqlArr = []
    for(let [key, value] of Object.entries(condition)) {
        if(value) {
            whereSqlArr.push(`${key}='${value}'`)
        }
    }
    return whereSqlArr.length ? whereSqlArr.join(' and ') : ''
}