<template>
  <div style="margin-top: 20px">
    子组件
    <grand-child v-bind="$attrs"></grand-child>
  </div>
</template>

<script setup lang="ts">
import grandChild from './grandChild.vue';

</script>

<style scoped></style>
