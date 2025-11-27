import { ref,onMounted } from 'vue'
export default function useSum(n:number,step:number){
    const sum=ref(0)
    const increment=():void=>{
      sum.value+=step
    }
    const decrement=():void=>{
      sum.value-=step
    }
    onMounted(()=>{
      increment()
    })
    return {sum,increment,decrement}
}