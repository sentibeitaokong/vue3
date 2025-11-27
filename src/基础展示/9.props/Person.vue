<template>
  <div>
    <div>父组件</div>
    <button @click="changeAge">父组件改年龄给子组件</button>
    <div>父亲的房子：{{house}}</div>


    <Child :name="name" :age="age" :changeHouse="decrementHouse"></Child>

  </div>
</template>

<script setup lang="ts">
import Child from './Child.vue'
  defineOptions({name:'App'})
  import { ref, onMounted } from 'vue'
  const name = ref<string>('xiaoming')
  const age = ref<number>(18)
  const house=ref<number>(3)

  function changeAge(){
    age.value+=1
  }
  function decrementHouse(){
    console.log('1111')
    house.value-=1
  }

</script>

<style scoped>

</style>
