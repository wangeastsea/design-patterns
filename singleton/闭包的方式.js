// 通过闭包的形式，保护单例变量
const Singleton = (function(){
    let _instance = null
    const Singleton = function () {
        if (_instance) return _instance
        _instance = this
        this.init()
        return _instance
    }
    Singleton.prototype.init = function () {
        this.foo = "Singleton Pattern"
    } 
    Singleton.getInstance = function () {
        if (_instance) return _instance
        _instance = new Singleton()
        return _instance
    }
    return Singleton
})()
const visitor1 = new Singleton()
const visitor2 = new Singleton()
console.log(visitor1 === visitor2)