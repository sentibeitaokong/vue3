<template>
  <div style="margin-top: 20px">
    子组件
    <button @click="decrementFangthHouse">干掉父亲一套房子</button>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'Child' })
const emit=defineEmits(['changeHouse'])
import { ref } from 'vue'
function decrementFangthHouse() {
  emit('changeHouse')
}
</script>

<style scoped></style>
