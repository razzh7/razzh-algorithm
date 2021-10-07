function debounce(cb,delay){
  var t = null;
  return function(){
    clearTimeout(t); // 如果函数再次触发，清除计时器重新计时
    var _self = this, // this指向调用者
        args = arguments; // 往执行函数传入实参
    t = setTimeout(function(){
      cb.apply(_self, args);
    },delay);
  }
}
