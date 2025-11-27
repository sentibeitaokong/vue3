<template>
  <div>
    News
    c:{{c}} d:{{d}}
<!--    编程式跳转路由-->
    <button @click="router.push('/News/NewTitle')">跳转标题</button>
    <RouterView/>
  </div>
</template>

<script setup lang="ts">
import {useRoute,useRouter} from 'vue-router'
import { RouterLink ,RouterView} from 'vue-router'
const route=useRoute()
const router=useRouter()

const {a,b}=route.params
const {c,d}=route.query
</script>

<style scoped>

</style>