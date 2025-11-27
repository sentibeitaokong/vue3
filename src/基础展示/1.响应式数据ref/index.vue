<template>
  <div class="app">
    <div>
      名字：{{ name }}
    </div>
    <div>
      年龄：{{age}}
    </div>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄+1</button>
  </div>
</template>

<script setup lang="ts">
  defineOptions({name:'App'})
  import {ref} from "vue";
  const name=ref('小李')
  const age=ref(18)

  function changeName():void{
    name.value='小花'
  }
  function changeAge():void{
    age.value+=1
  }


</script>



<style scoped>

</style>
