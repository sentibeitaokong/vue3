<template>
  <div class="app">
    <div>
      车名：{{ car.brand }}
    </div>
    <div>
      车价：{{car.price}}
    </div>
    <div>车颜色：{{car.message.color}}</div>
    <div>车高度：{{car.message.height}}</div>
    <button @click="changeName">修改车名</button>
    <button @click="changePrice">修改车价+100</button>
    <button @click="changeCarMessageColor">修改车颜色</button>
    <button @click="changeCarMessageHeight">修改车高度</button>
  </div>
</template>

<script setup lang="ts">
defineOptions({name:'App'})
import {reactive,watchEffect} from "vue";
const car=reactive(
  {
    brand:'奔驰',
    price:1000,
    message:{
      color:'black',
      height:60
    }
  }
)
function changeName():void{
  car.brand='宝马'
}
function changePrice():void{
  car.price+=100
}
function changeCarMessageColor(){
  car.message.color='red'
}
function changeCarMessageHeight(){
  car.message.height=70
}

const stopEffect=watchEffect(()=>{
    if(car.price<2000){
      console.log('慢慢加')
    }else{
      console.log('清理了，不准加')
      stopEffect()
    }
})


</script>



<style scoped>

</style>
