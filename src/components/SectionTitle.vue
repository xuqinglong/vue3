<template>
  <div class="title">
    <i />
    <strong> {{ titleText }} <slot></slot> </strong>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'SectionTitle',
    props: {
      titleText: {
        type: String,
        required: false,
        default: ''
      }
    }
  }
</script>

<style scoped lang="less">
  .title {
    position: relative;
    color: @primaryColor;
    background-color: @sectionTitleBg;
    height: 40px;
    text-align: left;
    i {
      margin: 13px;
      height: 14px;
      display: inline-block;
      border-left: 3px solid @primaryColor;
      border-radius: 5px;
    }
    strong {
      position: absolute;
      top: 50%;
      font-size: 15px;
      font-weight: bold;
      transform: translateY(-50%);
      display: inline-block;
    }
  }
</style>
