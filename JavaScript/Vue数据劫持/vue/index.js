import { initState } from './init';

function Vue(options) {
  this._init(options);
}

Vue.prototype._init = function(options) {
  var vm = this;
  vm.$options = options; //挂载到vm上
  initState(vm);
}

export default Vue;