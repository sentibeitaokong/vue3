<template>
  <div>
    <div>数字{{sum}}</div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script setup lang="ts">
import useSum from '@/基础展示/11.自定义Hooks/useSum.ts'
    const {sum,increment,decrement}=useSum(0,10)

</script>

<style scoped>

</style>
