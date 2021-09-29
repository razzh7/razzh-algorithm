Function.prototype._apply = function(context) {
  var context = context || window,
        res;
  context.fn = this;
  
  if(arguments[1]) {
    res = context.fn(...arguments[1]);
  } else {
    res = context.fn();
  }
  
  return res;
}

// Test
var foo = {
  value: 1
};

function bar(name, age, sex) {
  console.log(this.value);
  console.log(name);
  console.log(age);
  console.log(sex);
}

bar._apply(foo,['razzh',18,'man'])