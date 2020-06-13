function restaurant(menu) {
    switch (menu) {
        case '鱼香肉丝':
            return new YuXiangRousi()
        case '宫保鸡丁':
            return new GongBaoJiDin()
        default:
            throw new Error('没有这个菜')
    }
}
function YuXiangRousi() {
    this.type = '鱼香肉丝'
}
YuXiangRousi.prototype.eat = function () {
    console.log(this.type + '真想')
}
function GongBaoJiDin() {
    this.type = '宫保鸡丁'
}

GongBaoJiDin.prototype.eat = function () {
    console.log(this.type + ' 让我想起了外婆做的菜~')
}

const dish1 = restaurant('鱼香肉丝')
dish1.eat()
const dish2 = restaurant('红烧排骨')
dish2.eat()
