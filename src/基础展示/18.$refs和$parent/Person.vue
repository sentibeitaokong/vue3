<template>
  <div>
    <div>父组件</div>
    <div>儿子给的零花钱：{{ money }}</div>
    <button @click="sendSonHouse($refs)">给所有儿子房子+1</button>
    <Child ref="child1"></Child>
    <Child2 ref="child2"></Child2>
  </div>
</template>

<script setup lang="ts">
import Child from './Child.vue'
import Child2 from './Child2.vue'
import { ref } from 'vue'
const money = ref(0)
const child1=ref(null)
const child2=ref(null)
function sendSonHouse(refs:{[key:string]:any}){
  console.log(refs)
  for(let key in refs){
    refs[key].house+=1
  }
}
defineExpose({money})
</script>

<style scoped></style>
