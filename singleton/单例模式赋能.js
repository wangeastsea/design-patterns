class FuncClass {
    constructor(bar) {
        this.bar = bar
        this.init()
    }
    init () {
        this.foo = 'singleton Pattern'
    }
}
const Singleton = (function () {
    let _instance = null
    const ProxySingle = function (bar) {
        if (_instance) return _instance
        _instance = new FuncClass(bar)
        return _instance
    }
    ProxySingle.getInstance = function (bar) {
        if (_instance) return _instance
        _instance = new Singleton(bar)
        return _instance
    }
    return ProxySingle
})()

const visitor1 = new Singleton('单例1')
const visitor2 = new Singleton('单例2')
const visitor3 = Singleton.getInstance('单例3')
console.log(visitor1 === visitor2)
console.log(visitor1 === visitor3)
