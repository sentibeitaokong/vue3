import { createApp } from 'vue'
import { createPinia } from 'pinia'

// import App from './App.vue'
// import App from '@/基础展示/1.响应式数据ref/index.vue'
// import App from '@/基础展示/2.响应式数据reative/index.vue'
// import App from '@/基础展示/3.toRefs和toRef/index.vue'
// import App from '@/基础展示/4.computed/index.vue'
// import App from '@/基础展示/5.watch/1.watchRef.vue'
// import App from '@/基础展示/5.watch/2.watchReactive.vue'
// import App from '@/基础展示/5.watch/3.watch对象类型中某个属性.vue'
// import App from '@/基础展示/5.watch/4.watch对象类型中多个属性.vue'
// import App from '@/基础展示/6.watchEffect/watchEffect.vue'
// import App from '@/基础展示/7.ref用于普通dom使用/ref的dom使用.vue'
// import App from '@/基础展示/8.ref用于组件上/Person.vue'
// import App from '@/基础展示/9.props/Person.vue'
// import App from '@/基础展示/10.生命周期/personlifeStyle.vue'
// import App from '@/基础展示/11.自定义Hooks/useSum.vue'
// import App from '@/基础展示/12.router使用/App.vue'
// import App from '@/基础展示/13.pinia/pinia初体验.vue'
// import App from '@/基础展示/14.自定义事件/Person.vue'
// import App from '@/基础展示/15.mitt/Person.vue'
// import App from '@/基础展示/16.v-model/Person.vue'
// import App from '@/基础展示/17.$attrs/Person.vue'
// import App from '@/基础展示/18.$refs和$parent/Person.vue'
// import App from '@/基础展示/19.inject和provide/Person.vue'
// import App from '@/基础展示/20.slot/Person.vue'
// import App from '@/基础展示/21.shallowRef与shallowReactive/App.vue'
// import App from '@/基础展示/22.readonly与shallowReadonly/App.vue'
// import App from '@/基础展示/24.自定义customRef/App.vue'
// import App from '@/基础展示/25.Teleport/App.vue'
import App from '@/基础展示/26.Suspense/App.vue'
import router from './router'
import axios from 'axios'

const app = createApp(App)

app.use(createPinia())
app.use(axios)
app.use(router)

app.mount('#app')
