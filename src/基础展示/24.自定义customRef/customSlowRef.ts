import {customRef} from 'vue'
export default function(initialValue:string,delay:number){
    return customRef((track,trigger)=>{
      let timeout:number
      return {
        get(){
          track()
          return initialValue
        },
        set(val){
          clearTimeout(timeout)
          timeout=setTimeout(()=>{
            initialValue=val
            trigger()
          },delay)
        }
      }
    })
}