let getInstance;

{
  let _instance = null;
  const Singleton = function () {
    if (_instance) return _instance;
    _instance = this;
    this.init();
    return _instance;
  };
  Singleton.prototype.init = function () {
    this.foo = "Singleton Pattern";
  };
  getInstance = function () {
    if (_instance) return _instance;
    _instance = new Singleton();
    return _instance;
  };
}
const visitor1 = getInstance();
const visitor2 = getInstance();
console.log(visitor1 === visitor2);
