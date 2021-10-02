const _events = {}; //比喻成汽车品牌
_events.list = []; //花名册，保存各个牌子价格的订阅者

_events.lisener = function(key,fn) {
    if(!this.list[key]) {
        this.list[key] = [];
    }
    this.list[key].push(fn);
}

_events.emit = function(...args) {
    var listArr = this.list,
        key = [].shift.call(args);
    listArr[key].forEach(fn => {
        fn.apply(this, args);
    })
}

_events.removeLisener = function(key,fn) {
    this.list[key].forEach((_fn,index) => {
        if(_fn === fn) {
            this.list[key].splice(index, 1);
        }

    })
}
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
