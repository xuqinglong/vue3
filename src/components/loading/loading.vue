<template>
  <div v-if="loading" class="page" @click.stop>
    <div class="loading">
      <div class="k-ball-a"></div>
      <div class="k-ball-b"></div>
      <div class="k-ball-c"></div>
      <div class="k-ball-d"></div>
    </div>
  </div>
</template>

<script lang="ts">
  import { ref } from 'vue'

  export default {
    setup() {
      const loading = ref<boolean>(false)
      const show = () => {
        loading.value = true
      }
      const hide = () => {
        loading.value = false
      }
      return { loading, show, hide }
    }
  }
</script>

<style scoped lang="less">
  .page {
    position: absolute;
    z-index: 9999;
    width: 100%;
    height: 100%;
    top: 0;
    min-height: 80px;
    left: 0;
    background-color: rgba(255, 255, 255, 0.9);
    .loading {
      color: @primaryColor;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-24px, -24px);
      .k-ball-a {
        width: 16px;
        height: 16px;
        position: absolute;
        border-radius: 50%;
        animation: k-loadingO 2s ease infinite;
        background: #19a68c;
        animation-delay: -1.5s;
      }
      .k-ball-b {
        width: 16px;
        height: 16px;
        position: absolute;
        border-radius: 50%;
        animation: k-loadingO 2s ease infinite;
        background: #f63d3a;
        animation-delay: -1s;
      }
      .k-ball-c {
        width: 16px;
        height: 16px;
        position: absolute;
        border-radius: 50%;
        animation: k-loadingO 2s ease infinite;
        background: #fda543;
        animation-delay: -0.5s;
      }
      .k-ball-d {
        width: 16px;
        height: 16px;
        position: absolute;
        border-radius: 50%;
        animation: k-loadingO 2s ease infinite;
        background: #193b48;
      }
      @keyframes k-loadingO {
        0%,
        100% {
          transform: translate(0);
        }
        25% {
          transform: translate(160%);
        }
        50% {
          transform: translate(160%, 160%);
        }
        75% {
          transform: translate(0, 160%);
        }
      }
    }
  }
</style>
