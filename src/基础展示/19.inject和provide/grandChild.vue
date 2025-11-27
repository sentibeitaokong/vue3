<template>
  <div>
      孙组件
      爷爷的零花钱{{money}}
    <button @click="getMoney(8)">给爷爷零花钱</button>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
interface moneyInterface {
    money:number|undefined,
    getMoney():void
}
let {money,getMoney}=inject<moneyInterface>('moneyContent')

</script>

<style scoped>

</style>