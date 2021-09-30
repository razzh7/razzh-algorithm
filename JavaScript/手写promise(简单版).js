const PEDDING = 'padding';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

class MyPromise {
  constructor(fn) {
    const _self = this;
    _self.state = PEDDING;
    _self.value = undefined;
    _self.error = undefined;
    _self.resolveCallbacks = [];
    _self.rejectCallbacks = [];

    function resolve(value) {
      if(_self.state === PEDDING) {
        _self.state = RESOLVED;
        _self.value = value;
        _self.resolveCallbacks.map(cb => cb(_self.value));
      }
    }

    function reject(error) {
      if(_self.state === PEDDING) {
        _self.state = REJECTED;
        _self.error = error;
        _self.rejectCallbacks.map(cb => cb(_self.value));
      }
    }
    //获取同步代码错误
    try {
      fn(resolve,reject)
    } catch(err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    //处理同步代码
    if(this.state === RESOLVED) {
      onFulfilled(this.value);
    }

    if(this.state === REJECTED) {
      onRejected(this.error);
    }
    //处理异步代码
    if(this.state === PEDDING) {
      this.resolveCallbacks.push(onFulfilled);
      this.rejectCallbacks.push(onRejected);
    }
  }
}

function test() {
  return new MyPromise((resolve,reject) => {
    //加入宏任务池中
    setTimeout(function(){
      resolve('razzh');
    }, 1000);
  })
}

var t = test();
console.log(t)
t.then(res => {
  console.log(res);
},err => {
  console.log(err);
})

