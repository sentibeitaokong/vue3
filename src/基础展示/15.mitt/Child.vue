<template>
  <div style="margin-top: 20px">
    子组件
    <button @click="decrementFangthHouse">干掉父亲一套房子</button>
    <button @click="sendMoney">给父亲送钱</button>
  </div>
</template>

<script setup lang="ts">
import emitter from '@/基础展示/15.mitt/mitt.ts'
defineOptions({ name: 'Child' })
const emit=defineEmits(['changeHouse'])
import { ref } from 'vue'
function decrementFangthHouse() {
  emit('changeHouse')
}
function sendMoney(){
  //触发事件
  emitter.emit('send-money',666)
}
</script>

<style scoped></style>
