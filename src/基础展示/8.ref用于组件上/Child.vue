<template>
  <div>
    child
  </div>
</template>

<script setup lang="ts">
defineOptions({name:'Child'})

import { ref } from 'vue'
const name=ref<string>('xiaoming')
const age=ref<number>(16)
defineExpose({name,age})
</script>

<style scoped>

</style>
