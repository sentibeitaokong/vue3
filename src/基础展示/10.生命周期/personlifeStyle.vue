<template>
  <div>
    父组件
    <div v-if="showSum">
      <div>{{sum}}</div>
      <button @click="add">+</button>
      <button @click="showSum=false">关闭</button>
    </div>
    <div v-else>
      sum没了
      <button @click="showSum=true">开启</button>
    </div>
    <child v-if="showSum" :sum="sum" style="margin-top: 50px;"></child>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import child from './childLifeStyle.vue'
const sum=ref<number>(0)
const showSum=ref<boolean>(true)
function add(){
  sum.value+=1
}
  import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated } from 'vue'
  //挂载前
  onBeforeMount(()=>{
      console.log('父挂载前')
  })
  //挂载后
  onMounted(()=>{
    console.log('父挂载后')
  })
  //更新前
  onBeforeUpdate(()=>{
    console.log('父更新前')
  })
  //更新后
  onUpdated(()=>{
    console.log('父更新后')
  })
  //销毁前
  onBeforeUnmount(()=>{
    console.log('父销毁前')
  })
  //销毁后
  onUnmounted(()=>{
    console.log('父销毁后')
  })
</script>

<style scoped>

</style>