<template>
  <div>
    父组件
    <!--    <Child>-->
    <!--      默认插槽-->
    <!--      <template #default>-->
    <!--        123123-->
    <!--      </template>-->

    <!--      具名插槽-->
    <!--      <template #header>-->
    <!--        头部-->
    <!--      </template>-->
    <!--      <template #content>-->
    <!--        内容-->
    <!--      </template>-->
    <!--      <template #footer>-->
    <!--        底部-->
    <!--      </template>-->

    <!--      作用域插槽-->

    <!--    </Child>-->
    <Child>
      <template #default="{ nameList }">
        <ul>
          <li v-for="item in nameList" :key="item.name">{{ item.name }}</li>
        </ul>
      </template>
    </Child>
  </div>
</template>

<script setup lang="ts">
import Child from './Child.vue'
</script>

<style scoped></style>
