<template>
  <div>
    <div>父组件 </div>
    <div>孙子给的零花钱：{{money}}</div>
    <Child a="1" :sendMoney="getMoney"></Child>

  </div>
</template>

<script setup lang="ts">
import Child from './Child.vue'
import { ref } from 'vue'
const money = ref(0)
function getMoney(val:number){
  money.value+=val
}

</script>

<style scoped>

</style>
