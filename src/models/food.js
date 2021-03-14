import Base from "./base";

class Food extends Base {
    // 定义参数默认值为 food 表
    constructor(props = 'food'){
        super(props);
    }

}

export default new Food()
