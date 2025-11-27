<template>
  <div style="margin-top: 20px">
    子组件
<!--    <input type="text" :value="modelValue" @input="emit('update:model-value', (<HTMLInputElement>$event.target).value)">-->
    <input type="text" :value="abc" @input="emit('update:abc', (<HTMLInputElement>$event.target).value)">
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'Child' })
// defineProps(['modelValue'])
// const emit=defineEmits(['update:model-value'])
defineProps(['abc'])
const emit=defineEmits(['update:abc'])
import { ref } from 'vue'

</script>

<style scoped></style>
