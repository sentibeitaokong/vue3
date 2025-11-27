<template>
  <div style="margin-top: 20px">
    子组件
    <!--    默认插槽-->
    <!--    <slot>-->
    <!--      默认内容-->
    <!--    </slot>-->

    <!--    具名插槽-->
    <!--      <slot name="header">aaa</slot>-->
    <!--      <slot name="content">bbb</slot>-->
    <!--      <slot name="footer">ccc</slot>-->

    <!--    作用域插槽-->
    <div>11111</div>
<!--    name为slot关键字  不能用做传递参数,否则无法识别是具名插槽还是作用域插槽-->
<!--    <slot :name="name"></slot>-->
    <slot :nameList="name"></slot>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
const name = reactive([{
  name:'小花',
  age:18
}])
</script>

<style scoped></style>
