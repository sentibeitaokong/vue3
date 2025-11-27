<template>
  <div>
    <div id="title">title</div>
    <div ref="title1">第一个ref</div>
    <div ref="title2">第二个ref</div>
    <div ref="title3">第三个ref</div>
  </div>
</template>

<script setup lang="ts">
  defineOptions({name:'App'})
  import { ref, onMounted } from 'vue'
  const  title1=ref<HTMLDivElement|null>(null)
  const  title2=ref<HTMLDivElement|null>(null)
  const  title3=ref<HTMLDivElement|null>(null)
  onMounted(()=>{
    let title=document.getElementById('title')?.innerText
    console.log(title)
    console.log(title1.value )
    console.log(title2.value )
    console.log(title3.value )
  })
</script>

<style scoped>

</style>
