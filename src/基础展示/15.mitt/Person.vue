<template>
  <div>
    <div>父组件</div>
    <div>父亲的房子：{{house}}</div>
    <div>儿子的钱：{{money}}</div>
    <Child  @changeHouse="decrementHouse"></Child>

  </div>
</template>

<script setup lang="ts">
import emitter from '@/基础展示/15.mitt/mitt.ts'
import Child from './Child.vue'
  defineOptions({name:'App'})
  import { ref, onMounted } from 'vue'
import type { Handler } from 'mitt'
  const house=ref<number>(3)
  const money=ref<number>(0)
  function decrementHouse(){
    console.log('222')
    house.value-=1
  }

  //绑定事件
  emitter.on('send-money',(value:number)=>{
    console.log('拿到钱了')
    money.value=value
  })
// 移除事件
//   emitter.off('send-money')

</script>

<style scoped>

</style>
