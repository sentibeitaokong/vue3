<template>
  <div class="app">
    <div>
      车名：{{ car.brand }}
    </div>
    <div>
      车价：{{car.price}}
    </div>
    <ul>
      <li v-for="person in personList" :key="person.name">
        <div>{{person.name}}</div>
        <div>{{person.age}}</div>
      </li>
    </ul>
    <div>数据：{{obj.a.b.c}}</div>
    <button @click="changeName">修改车名</button>
    <button @click="changePrice">修改车价+100</button>
    <button @click="changeCar">修改整个车</button>
    <button @click="changeObj">改深层数据</button>
  </div>
</template>

<script setup lang="ts">
  defineOptions({name:'App'})
  import {ref,reactive} from "vue";
  const car=reactive({brand:'奔驰',price:1000})
  const personList=reactive([
    {
      name:'小花',
      age:19
    },
    {
      name:'xiaoli',
      age:20
    }
  ])
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
  function changeObj() :void{
    obj.a.b.c=200
  }
  function changeCar():void{
    Object.assign(car,{brand:'本田',price:5})
  }


</script>



<style scoped>

</style>
