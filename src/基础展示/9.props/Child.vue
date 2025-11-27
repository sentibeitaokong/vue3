<template>
  <div style="margin-top: 20px">
    子组件
    <div>名称{{ name }} 年龄{{ age }}</div>
    <button @click="decrementFangthHouse">干掉父亲一套房子</button>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'Child' })
import { ref } from 'vue'
const {name,age,changeHouse}=defineProps(['name', 'age','changeHouse'])
function decrementFangthHouse() {
  changeHouse()
}
</script>

<style scoped></style>
