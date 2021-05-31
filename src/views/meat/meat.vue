<template>
  <div class="content">
    <classify-grid :category="'GanHuo'" />
  </div>
</template>

<script>
  import ClassifyGrid from '@/components/ClassifyGrid.vue'
  export default {
    name: 'Meat',
    components: { ClassifyGrid }
  }
</script>

<style scoped lang="less">
  .content {
    height: calc(100% - 50px);
    max-height: calc(100% - 50px) !important;
    overflow-y: auto;
  }
</style>
