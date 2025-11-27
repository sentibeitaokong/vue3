<template>
  <div>
      子组件2
     爸爸给的房子{{house}}

    <button @click="sendMoney($parent)">给爸爸零花钱+100</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const house=ref(0)
function sendMoney(parent:any){
  parent.money+=100
}
defineExpose({house})

</script>

<style scoped>

</style>