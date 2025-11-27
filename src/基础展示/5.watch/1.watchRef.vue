<template>
  <div>
<!--    <div>{{sum}}</div>-->
<!--    <button @click="add">+</button>-->
    <div>{{car.brand}}</div>
    <div>{{car.price}}</div>
    <button @click="changeName">修改车名</button>
    <button @click="changePrice">修改车价+100</button>
    <button @click="changeCar">修改整个车</button>
  </div>
</template>

<script setup lang="ts">
import {watch,ref} from "vue";
//1.监听ref基础类型
// const sum=ref<number>(0)
// function add() {
//   sum.value+=1
// }
//
// const stopWatch=watch(sum,(newValue,oldValue)=>{
//   if(sum.value>10){
//     console.log('超过10，停止监听')
//     stopWatch()
//   }
// })

//2.监听ref对象类型
const car=ref({brand:'奔驰',price:1000})
function changeName():void{
  car.value.brand='宝马'
}
function changePrice():void{
  car.value.price+=100
}
function changeCar():void{
  car.value={brand:'本田',price:5}
}
// 监听ref对象类型，需要添加deep:true才能监听到深层的对象数据变化
watch(car,(newValue,oldValue)=>{
    console.log(newValue,oldValue)
},{deep:true})


defineOptions({name:'App'})
</script>

<style scoped>

</style>
