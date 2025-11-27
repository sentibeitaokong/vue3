<template>
  <div class="app">
    <div>
      车名：{{ brand }}
    </div>
    <div>
      车价：{{price}}
    </div>
    <div>
      车速：{{speed}}
    </div>
    <button @click="changeName">修改车名</button>
    <button @click="changePrice">修改车价+100</button>
    <button @click="changeSpeed">修改车速+10</button>
  </div>
</template>

<script setup lang="ts">
  defineOptions({name:'App'})
  import {ref,reactive} from "vue";
  import {toRef,toRefs} from "vue";
  const car=reactive({brand:'奔驰',price:1000,speed:200})
  const {brand,price}=toRefs(car)
  const speed=toRef(car,'speed')

  function changeName():void{
    car.brand='宝马'
  }
  function changePrice():void{
    car.price+=100
  }
  function changeSpeed():void{
    car.speed+=10
  }


</script>



<style scoped>

</style>
