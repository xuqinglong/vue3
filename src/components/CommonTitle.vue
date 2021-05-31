<template>
  <header class="header">
    <a @click="back" />
    <h4>{{ titleText }}<slot></slot></h4>
  </header>
</template>

<script lang="ts">
  import { useRouter } from 'vue-router'

  export default {
    name: 'CommonTitle',
    props: {
      titleText: {
        type: String,
        required: false,
        default: ''
      }
    },
    setup() {
      const router = useRouter()
      /**
       * 返回
       */
      const back = () => {
        router.back()
      }
      return { back }
    }
  }
</script>

<style scoped lang="less">
  .header {
    position: relative;
    height: @titleHeight;
    background-color: @primaryColor;
    color: white;
    a {
      display: inline-block;
      width: 50px;
      height: 50px;
      position: absolute;
      top: 0;
      left: 0;
      cursor: pointer;
      background-image: url('@img/ic_back.svg');
      background-size: 45%;
      background-position: center;
      background-repeat: no-repeat;
    }
    h4 {
      display: inline-block;
      position: absolute;
      width: calc(100% - 100px);
      font-size: 16px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>
