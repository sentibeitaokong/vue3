import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
export const useSumStore=defineStore('sum',()=>{
  const sum=ref(0)
  const increment=()=>{
    sum.value+=1
  }
  const decrement=()=>{
    sum.value-=1
  }
  const doubleSum=computed(()=>{
    return sum.value*2
  })
  return {sum,increment,decrement,doubleSum}
})
