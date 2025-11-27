<template>
  <div>
    <div>父组件</div>
    <div>
      {{name}}
    </div>
<!--    v-model -->
<!--    <input type="text" v-model="name">-->
<!--    v-model 等价-->
<!--    <input type="text" :value="name" @input="name=(<HTMLInputElement>$event.target).value">-->

<!--    组件v-model-->
<!--    <Child v-model="name"></Child>-->

<!--    和组件v-model等价  $event.target.value是原生事件的数据   $event是自定义事件传递的数据 -->
<!--        <Child :modelValue="name" @update:model-value="name=$event"></Child>-->

<!--        修改传递的参数-->
<!--    <Child v-model:abc="name"></Child>-->

<!--     和v-model:abc 相等价 。      -->
    <Child :abc="name" @update:abc="name=$event"></Child>

  </div>
</template>

<script setup lang="ts">
import Child from './Child.vue'
  defineOptions({name:'App'})
  import { ref, onMounted } from 'vue'
  const name=ref<string>('')
  console.log(name)

</script>

<style scoped>

</style>
