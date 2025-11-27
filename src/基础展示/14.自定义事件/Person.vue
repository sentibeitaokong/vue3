<template>
  <div>
    <div>父组件</div>
    <div>父亲的房子：{{house}}</div>
    <Child  @changeHouse="decrementHouse"></Child>

  </div>
</template>

<script setup lang="ts">
import Child from './Child.vue'
  defineOptions({name:'App'})
  import { ref, onMounted } from 'vue'
  const house=ref<number>(3)
  function decrementHouse(){
    console.log('222')
    house.value-=1
  }

</script>

<style scoped>

</style>
