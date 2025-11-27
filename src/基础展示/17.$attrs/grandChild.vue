<template>
  <div>
      孙组件
      {{a}}

    <button @click="sendMoney(100)">给爷爷零花钱</button>
  </div>
</template>

<script setup lang="ts">
const {a,sendMoney}=defineProps(['a','sendMoney'])
</script>

<style scoped>

</style>