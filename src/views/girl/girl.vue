<template>
  <div class="content">
    <classify-grid :category="'Girl'" />
  </div>
</template>

<script lang="ts">
  import ClassifyGrid from '@/components/ClassifyGrid.vue'
  export default {
    name: 'Girl',
    components: { ClassifyGrid },
    setup() {}
  }
</script>

<style scoped lang="less">
  .content {
    height: calc(100% - 50px);
    max-height: calc(100% - 50px) !important;
    overflow-y: auto;
  }
</style>
