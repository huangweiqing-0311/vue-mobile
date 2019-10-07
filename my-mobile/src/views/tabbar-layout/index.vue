<template>
  <div>
     <!-- 路由出口,内容会根据tabbar变化 -->
   <router-view></router-view>
    
    <!-- tabbar导航 -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="comment-o" >问答</van-tabbar-item>
      <van-tabbar-item icon="video-o">视频</van-tabbar-item>
      <van-tabbar-item icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
      name: 'tabbar',
      data() {
          return {
             // 默认显示下标的0
             active: 0 
          }
      },
};
</script>

<style>
</style>
