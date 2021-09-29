//版本1————不带new this指向
Function.prototype._bind1 = function(context, ...args1) {
  const func = this; //调用函数者
  console.log(this)
  return function(...args2) {
    return func.apply(context, [...args1, ...args2]);
  }
}

//版本2
Function.prototype._bind2 = function(context, ...args1) {
  if(typeof this !== 'function') {
    new Error(`${this} is not function`);
  }
  const func = this;

  const fBound = function(...args2) {
    // this instanceof fBound 用来判断是否实例化(new)，如果是this指向实例化对象
    return func.apply(this instanceof fBound ? this : context, [...args1, ...args2]);
  }
  fBound.prototype = Object.create(func.prototype); //实例对象获取原型链上的属性
  return fBound;
}

//Test

var foo = {
    value: 1
};

function bar(name, age, sex) {
    this.habit = 'shopping';
    console.log(this);
    console.log(name);
    console.log(age);
    console.log(sex);
}
bar.prototype.book = 'you dont know js';
let bindFoo = bar._bind2(foo, 'razzh');
// bindFoo('18','man');
let obj = new bindFoo('18','man');
console.log(obj.book);
