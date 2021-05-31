<template>
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
</template>

<script lang="ts">
  export default {
    name: 'App',
    setup() {}
  }
</script>
<style scoped lang="less">
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.35s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .router-view {
    width: 100%;
    max-width: 640px;
    margin: 0 auto;
    max-height: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
