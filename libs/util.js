// 生成条件sql
module.exports = {
    produceConditionSql(condition={}) {
        let whereSqlArr = []
        for(let [key, value] of Object.entries(condition)) {
            if(value) {
                whereSqlArr.push(`${key}='${value}'`)
            }
        }
        return whereSqlArr.join(' and ')
    }
}
