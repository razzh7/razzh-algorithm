class EventEmitter {
    constructor() {
        this._events = {}; //售楼处
        this._events.list = []; //花名册，保存各个需求的订阅者
    }
   lisener(key,fn) {
        if(!this._events.list[key]) {
            this._events.list[key] = [];
        }
        this._events.list[key].push(fn);
    }
   emit(...args) {
       var key = [].shift.call(args);

        var listArr = this._events.list[key];
        listArr.forEach(fn => {
            fn.apply(this, args);
        })
    }
   removeLisener(key,fn) {
       let list = this._events.list[key];
        list.forEach((_fn,index) => {
            if(_fn === fn) {
                list.splice(index, 1);
            }

        })
    }
}

// Test
var emitter = new EventEmitter();
emitter.lisener('ford',ford);
emitter.lisener('CT4',ct4);
// emitter.removeLisener('ford',ford);
setTimeout(function(){
    emitter.emit('ford','150k');
    emitter.emit('CT4','200k');
},1000)
function ford(price) {
    console.log('price',price);
}
function ct4(price) {
    console.log('price',price);
}
