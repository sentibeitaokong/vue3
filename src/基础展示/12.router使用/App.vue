<template>
  <div>
<!--    导航区-->
<!--    <RouterLink to="/Home" active-class="active" style="margin-right: 20px">home</RouterLink>-->
<!--    <RouterLink to="/News" active-class="active" style="margin-right: 20px">news</RouterLink>-->
<!--    <RouterLink to="/Page" active-class="active" style="margin-right: 20px">page</RouterLink>-->

<!--    to传参的三种方式-->
    <RouterLink :to="{path:'/Home'}" active-class="active" style="margin-right: 20px">home</RouterLink>
    <RouterLink :to="{name:'Page'}" active-class="active" style="margin-right: 20px">page</RouterLink>
<!--    query传参-->
    <RouterLink :to="{path:'/News',query:{c:1,d:2}}" active-class="active" style="margin-right: 20px">news</RouterLink>
    <!--    params传参只能使用name   replace替换当前路径，没有历史记录-->
    <RouterLink :to="{name:'Slider',params:{a:1,b:2}}" active-class="active" style="margin-right: 20px" replace>Slider</RouterLink>
    <div class="main-container">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts">
import {RouterView,RouterLink} from 'vue-router'

</script>

<style scoped>
.main-container{
  width: 800px;
  height: 200px;
  margin-top: 20px;
  background-color: aquamarine;
}
.active{
  color:red
}
</style>