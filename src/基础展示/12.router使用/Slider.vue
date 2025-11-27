<template>
  <div>
      slider
    a:{{a}} b:{{b}}
<!--    title:{{title}} content:{{content}}-->
  </div>
</template>

<script setup lang="ts">
import {useRoute} from 'vue-router'
const route=useRoute()
// defineProps(['title','content'])

const {a,b}=route.params
</script>

<style scoped>

</style>