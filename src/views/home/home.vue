<template>
  <div class="content">
    <van-swipe v-if="data.list && data.list.length > 0" v-loading="data.loading" class="banner" :autoplay="5000">
      <van-swipe-item v-for="(item, index) in data.list" :key="index" class="banner-item" @click="toBanner(item)">
        <van-image :src="item.image" alt="加载失败" class="van-image" fit="cover" />
        <h4>{{ item.title }}</h4>
      </van-swipe-item>
      <template #indicator="{ active }">
        <div class="custom-indicator">{{ active + 1 }}/{{ data.list.length }}</div>
      </template>
    </van-swipe>
    <section-title style="margin-top: 8px; margin-bottom: 5px">专题文章</section-title>
    <classify-grid :category="'Article'" />
  </div>
</template>

<script lang="ts">
  import { reactive } from 'vue'
  import { getBanner } from '@/api/home'
  import { Swipe, SwipeItem, Image, Grid, GridItem } from 'vant'
  import { useRouter } from 'vue-router'
  import SectionTitle from '@/components/SectionTitle.vue'
  import ClassifyGrid from '@/components/ClassifyGrid.vue'
  import { useStore } from 'vuex'

  export default {
    name: 'Home',
    components: {
      ClassifyGrid,
      SectionTitle,
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
      [Image.name]: Image,
      [Grid.name]: Grid,
      [GridItem.name]: GridItem
    },
    setup() {
      const router = useRouter()
      const data = reactive({
        list: [],
        loading: false,
        types: []
      })
      /**
       * 点击banner跳转
       */
      const toBanner = (item: any) => {
        router.push({ name: 'outUrl', query: { url: item.url } })
      }
      const store = useStore()
      store.commit('userCode', 'xuqinglong')
      data.loading = true
      getBanner()
        .then(res => {
          data.list = res.data || []
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => {
          data.loading = false
        })
      return { data, toBanner }
    }
  }
</script>

<style scoped lang="less">
  .content {
    background-color: white;
    height: calc(100% - 50px);
    max-height: calc(100% - 50px) !important;
    overflow-y: auto;
  }
  .banner {
    height: 180px;
    .banner-item {
      height: 100%;
      position: relative;
      .van-image {
        width: 100%;
        height: 100%;
      }
      h4 {
        position: absolute;
        bottom: 0;
        padding: 5px;
        font-size: 14px;
        color: white;
        float: left;
      }
    }
    .custom-indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      color: white;
      padding: 2px 5px;
      font-size: 12px;
      background: rgba(0, 0, 0, 0.9);
    }
  }
</style>
