// 作用：vue中可以使用vm.xxx来访问data属性，这里需要经过代理处理
function proxyData(vm,_data,key) {
  //数据劫持,获取/设置vm.xxx的时候触发
  Object.defineProperty(vm,key, {
    get() {
      //输入vm.xxx -> 代理为vm[_data][key]
      return vm[_data][key];
    },
    set(newValue) {
      vm[_data][key] = newValue;
    }
  })
}

export default proxyData;