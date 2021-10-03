import proxyData from './proxy';
import observe from './observe';
function initState(vm) {
  var options = vm.$options;
  
  if(options.data) {
    initData(vm);
  }
}

function initData(vm) {
  var data = vm.$options.data;
  /**
   * vue不希望直接操作用户的data，所以复制一个data的副本_data
   * 若data是函数形式的执行函数
   * 若data是对象形式 data: {...} (官方不推荐这种写法) 直接返回data对象
   */
  vm._data = typeof data === 'function' ? data.call(vm) : data;
  for(let key in vm._data) {
    proxyData(vm,'_data',key);
  }

  observe(vm._data);
}

export {
  initState
}