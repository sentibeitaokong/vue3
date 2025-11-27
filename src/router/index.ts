import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '@/基础展示/12.router使用/Home.vue'
import News from '@/基础展示/12.router使用/News.vue'
import Page from '@/基础展示/12.router使用/Page.vue'
import Slider from '@/基础展示/12.router使用/Slider.vue'
import NewTitle from '@/基础展示/12.router使用/NewTitle.vue'
const router = createRouter({
  //histroy路由
  //优点：URL更加美观，不带有#，更接近传统的网站URL。
  //缺点：后期项目上线，需要服务端配合处理路径问题，否则刷新会有404错误。
  history: createWebHistory(import.meta.env.BASE_URL),
  //hash路由
  // 优点：兼容性更好，因为不需要服务器端处理路径。
  // 缺点：URL带有#不太美观，且在SEO优化方面相对较差。
  // history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      redirect:'/Home'
    },
    {
        path:'/Home',
        //组件懒加载
        component:()=>import('@/基础展示/12.router使用/Home.vue'),
    },
    {
      name:'News',
      path:'/News',
      component:News,
      children:[
        {
          name:'NewTitle',
          path:'NewTitle',
          component:NewTitle
        }
      ]
    },
    {
      //命名路由
      name:'Page',
      path:'/Page',
      component:Page,
    },
    {
      //命名路由
      name:'Slider',
      path:'/Slider/:a/:b',
      // 路由的三种props配置

      //直接传制定数据
      // props:{title:'aa',content:'b'},

      //将params按props传给组件
      // props:true,

      //函数动态控制传递参数
      props(route){
        console.log(route)
        return route.params
      },

      component:Slider,
    }
  ],
})

export default router
