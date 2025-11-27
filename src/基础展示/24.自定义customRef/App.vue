<template>
  <div>
    <div>名字{{name}}</div>
    <input type="text" v-model="name">
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import customSlowRef from './customSlowRef.ts'
const name=customSlowRef('你好',1000)
</script>

<style scoped>

</style>