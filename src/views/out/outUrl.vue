<template>
  <div v-loading="loading" class="content">
    <common-title>详情</common-title>
    <iframe id="iframe" ref="iframe" :src="url" class="frame"></iframe>
  </div>
</template>

<script lang="ts">
  import { onMounted, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import CommonTitle from '@/components/CommonTitle.vue'

  export default {
    name: 'OutUrl',
    components: { CommonTitle },
    setup() {
      const router = useRoute()
      const url = ref<string>('')
      const iframe = ref<any>(null)
      const loading = ref(false)
      url.value = router.query.url as string
      loading.value = true
      onMounted(() => {
        if (iframe.value.attachEvent) {
          iframe.value.attachEvent('onload', () => {
            loading.value = false
          })
        } else {
          iframe.value.onload = () => {
            loading.value = false
          }
        }
      })
      return { url, iframe, loading }
    }
  }
</script>

<style scoped lang="less">
  .content {
    width: 100%;
    height: 100%;
    .frame {
      display: block;
      overflow: hidden;
      height: calc(100% - 50px);
      width: 100%;
      border: medium none;
    }
  }
</style>
