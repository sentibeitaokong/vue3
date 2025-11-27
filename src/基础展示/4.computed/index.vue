<template>
  <div>
    姓名：
    <div>
      姓:<input type="text" v-model="firstName">
    </div>
    <div>
      名：<input type="text" v-model="lastName">
    </div>
    全名：<span>{{fullName}}</span>
    <div>
      <button @click="changeName">修改全名为李华</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";

defineOptions({name:'App'})

const firstName=ref<string|undefined>('zhang')
const lastName=ref<string|undefined>('san')
//仅读取，无法修改
// const fullName=computed(()=>{
//   return firstName.value+'-'+lastName.value
// })

//可读可写
const fullName=computed({
  get(){
    return firstName.value+'-'+lastName.value
  },
  set(val){
    firstName.value=val.split('-')[0]
    lastName.value=val.split('-')[1]
  }
})
function changeName() {
  fullName.value='李-华'
}
</script>

<style scoped>

</style>
