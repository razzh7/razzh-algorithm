function create() {
  var obj = new Object(); //创建一个空对象
  var conFn = [].shift.call(arguments); //删除arguments第一个参数，此参数是传进来的构造函数,conFn接收该构造函数
  obj.__proto__ = conFn.prototype; //原型链继承
  var res = conFn.apply(obj,arguments);  //执行构造函数,传入arguments
  if(typeof res === 'object' || 'function') {
    return res || obj; //若res是null返回obj
  }
}

// TEST
function bar(name, age, sex) {
  console.log(name);
  console.log(age);
  console.log(sex);
  // return {
  //   name,
  //   age,
  //   sex
  // }
  // return [];
  // return 'str';
  return null;
}
var b = create(bar,'razzh',18,'man');
// var b = new bar('razzh',18,'man');
console.log(b);