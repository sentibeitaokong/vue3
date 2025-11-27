<template>
  <div>
    <div>person
      <div>{{child.name}}</div>
      <div>{{child.age}}</div>
    </div>
    <div id="title">title</div>
    <div ref="title1">第一个ref</div>
    <div ref="title2">第二个ref</div>
    <div ref="title3">第三个ref</div>
<!--    <button @click="test">测试</button>-->
    <Child ref="child"></Child>
  </div>
</template>

<script setup lang="ts">
import Child from './Child.vue'
  defineOptions({name:'App'})
  import { ref, onMounted } from 'vue'
  const  title1=ref<HTMLDivElement|null>(null)
  const  title2=ref<HTMLDivElement|null>(null)
  const  title3=ref<HTMLDivElement|null>(null)
  const  child=ref({name:'',age:19})
  onMounted(()=>{
    let title=document.getElementById('title')?.innerText
    console.log(title)
    console.log(title1.value )
    console.log(title2.value )
    console.log(title3.value )
    console.log(child.value.name,child.value.age )
  })
// function test(){
//   child.value={name,age}
//   console.log(child.value.name,child.value.age )
// }
</script>

<style scoped>

</style>
