function clone(target, map = new Map()) {
  if(typeof target === 'object') {
    let cloneTarget = Array.isArray(target) ? [] : {};
    if(map.get(target)) {
      return map.get(target); //防止循环引用导致的栈内存溢出
    }
    map.set(target, cloneTarget);

    for(var key in target) {
      cloneTarget[key] = clone(target[key], map);
    }
    return cloneTarget;
  } else {
    return target;
  }
}

const target = {
  field1: 1,
  field3: {
    child: 'child'
  },
  field4: [2,4,8]
}
target.target = target; //循环引用
let tr = clone(target);

console.log(tr);