function create() {
  var obj = new Object();
  //删除arguments第一个参数，此参数是传进来的构造函数,conFn接收该构造函数
  var conFn = [].shift.call(arguments);
  //经典继承 
  obj.__proto__ = Object.create(conFn.prototype);
  //执行构造函数,传入arguments
  var result = conFn.apply(obj,arguments);
  //判断返回类型，如果result是对象，返回result
  //若result是undefined返回空对象
  //若result返回其他类型的值还是要返回空对象
  return typeof result === 'object' ? result || obj : obj;
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
  return 'str';
}
var b = create(bar,'razzh',18,'man');
// var b = new bar('razzh',18,'man');
console.log(b);