<template>
  <div style="margin-top: 20px">
    子组件
    爸爸给的房子{{house}}
    <button @click="sendMoney($parent)">给爸爸零花钱+200</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const house=ref(0)
function sendMoney(parent:any){
  parent.money+=200
}
defineExpose({house})
</script>

<style scoped></style>
