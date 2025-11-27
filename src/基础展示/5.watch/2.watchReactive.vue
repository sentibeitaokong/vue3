<template>
  <div class="app">
    <div>
      车名：{{ car.brand }}
    </div>
    <div>
      车价：{{car.price}}
    </div>
    <div>数据：{{obj.a.b.c}}</div>
    <button @click="changeName">修改车名</button>
    <button @click="changePrice">修改车价+100</button>
    <button @click="changeCar">修改整个车</button>
    <button @click="changeObj">改深层数据</button>
  </div>
</template>

<script setup lang="ts">
defineOptions({name:'App'})
import {reactive,watch} from "vue";
const car=reactive({brand:'奔驰',price:1000})
const obj=reactive({
  a:{
    b:{
      c:100
    }
  }
})

function changeName():void{
  car.brand='宝马'
}
function changePrice():void{
  car.price+=100
}
function changeCar():void{
  Object.assign(car,{brand:'本田',price:5})
}
function changeObj() :void{
  obj.a.b.c=200
}

// 监听reactive对象类型，默认开启deep:true,主动设置deep:false,只能监听对象顶层属性
watch(car,(newValue,oldValue)=>{
  console.log(newValue,oldValue)
})

watch(obj,(newValue,oldValue)=>{
  console.log(newValue)
},{deep:false})


</script>



<style scoped>

</style>
