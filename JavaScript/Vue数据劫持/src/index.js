import Vue from 'vue';

let vm = new Vue({
  el: '#app',
  data() {
    return {
      car: '汽车',
      total: 2,
      cars: ['ford', 'ct4'],
      customer: [
        {
          id: 1,
          name: '小豪'
        },
        {
          id: 2,
          name: '阿龟'
        },
        {
          id: 3,
          name: 'ff'
        }
      ]
    }
  }
})
vm.cars[0] = 'bieke'
console.log(vm.cars);