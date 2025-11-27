<template>
  <div>
    <div>sumStore</div>
    <div>合计：{{sum}}</div>
    <div>
      <button @click="sumStore.increment()">+</button>
      <button @click="sumStore.decrement()">-</button>
    </div>
    <div>双倍数据{{doubleSum}}</div>
  </div>
</template>

<script setup lang="ts">
import { useSumStore } from '@/stores/sum.ts'
import { storeToRefs } from 'pinia'
const sumStore=useSumStore()


//修改store三种方式
//直接修改
// sumStore.sum=666

//批量修改
// sumStore.$patch({sum:999})

//通过action修改
// sumStore.increment()


// 解构，只会将左边需要的数据结构解构出来
const {sum,doubleSum}=storeToRefs(sumStore)

// 监听state变化 无论通过action,赋值,$patch都会监听触发回调  第一个参数时变更信息 第二个是当前state对象
sumStore.$subscribe((mutation, state)=>{
  console.log(mutation,state)
})


</script>

<style scoped>

</style>