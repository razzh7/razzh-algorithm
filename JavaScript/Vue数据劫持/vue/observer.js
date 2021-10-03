function Observer(data) {
  if(Array.isArray(data)) {

  } else {
    this.walk(data);
  }
}

Observer.prototype.walk = function(data) {
  var keys = Object.keys(data);

  keys.forEach(elem => {
    var key = elem,
        value = data[key];
    defineReactiveData(data, key, value);
  })
}
//响应式函数
function defineReactiveData(data, key, value) {
  Object.defineProperty(data, key, {
    get() {
      console.log('响应式数据获取',value);
      return value;
    },
    set(newValue) {
      console.log('响应式数据设置',newValue);
      if(newValue === value) {
        return;
      }
      value = newValue;
    }
  })
}

export default Observer;