Function.prototype._call = function(context,...args) {
  var context = context || window,
      res;
      context.fn = this;

      if(args) {
        res = context.fn(...args);
      }else {
        res = context.fn();
      }

      delete context.fn;
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


// bar._call(foo,'razzh',18,'man')
bar._call(foo);
// bar._call(null);