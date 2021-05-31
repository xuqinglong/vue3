<template>
  <div>
    <router-view v-slot="{ Component }" class="router-view">
      <transition v-if="$route.meta.keepAlive" name="fade" mode="out-in">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
      <transition v-if="!$route.meta.keepAlive" name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <van-tabbar v-model="active" route class="van-tabbar">
      <van-tabbar-item to="/home" name="home" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/meat" name="meat" icon="gem-o">干货</van-tabbar-item>
      <van-tabbar-item to="/girl" name="girl" icon="browsing-history-o">妹子</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script lang="ts">
  import { Tabbar, TabbarItem } from 'vant'
  import { ref } from 'vue'
  export default {
    name: 'Index',
    components: {
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem
    },
    setup() {
      const active = ref<string>('home')
      return { active }
    }
  }
</script>

<style scoped lang="less">
  .van-tabbar {
    height: 50px;
    max-width: 640px;
    left: 50%;
    transform: translateX(-50%);
  }
  .van-tabbar-item--active {
    color: @primaryColor;
  }
</style>
