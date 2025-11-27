<template>
  <div>
    子组件{{sum}}
  </div>
</template>
<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated } from 'vue'
defineProps(['sum'])
//挂载前
onBeforeMount(()=>{
  console.log('子挂载前')
})
//挂载后
onMounted(()=>{
  console.log('子挂载后')
})
//更新前
onBeforeUpdate(()=>{
  console.log('子更新前')
})
//更新后
onUpdated(()=>{
  console.log('子更新后')
})
//销毁前
onBeforeUnmount(()=>{
  console.log('子销毁前')
})
//销毁后
onUnmounted(()=>{
  console.log('子销毁后')
})
</script>



<style scoped></style>
