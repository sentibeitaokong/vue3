<template>
  <div>
    <div>父组件 </div>
    <div>孙子给的零花钱：{{money}}</div>
    <Child></Child>

  </div>
</template>

<script setup lang="ts">
import Child from './Child.vue'
import { provide } from 'vue'
import { ref } from 'vue'
const money = ref<number>(0)
function getMoney(val:number):void{
  money.value+=val
}
provide('moneyContent',{money,getMoney})


</script>

<style scoped>

</style>
