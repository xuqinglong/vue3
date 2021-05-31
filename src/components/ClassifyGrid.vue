<template>
  <van-grid v-if="data.types && data.types.length > 0" v-loading="data.loading" :column-num="1">
    <van-grid-item v-for="(value, index) in data.types" :key="index" @click="toList(value)">
      <van-image :src="value.coverImageUrl" fit="cover" />
    </van-grid-item>
  </van-grid>
</template>

<script lang="ts">
  import { Grid, GridItem, Image } from 'vant'
  import { useRouter } from 'vue-router'
  import { getTypeList } from '@/api/home'
  import { reactive } from 'vue'

  export default {
    name: 'ClassifyGrid',
    components: {
      [Image.name]: Image,
      [Grid.name]: Grid,
      [GridItem.name]: GridItem
    },
    props: {
      category: {
        type: String,
        required: true,
        default: ''
      }
    },
    setup(props: any) {
      const data = reactive({
        types: [],
        loading: false
      })
      const router = useRouter()
      data.loading = true
      getTypeList(props.category)
        .then(res => {
          data.types = res.data || []
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => {
          data.loading = false
        })
      const toList = (item: any) => {
        router.push({ path: `/articleList/${item.type}/${props.category}` })
      }
      return { data, toList }
    }
  }
</script>

<style scoped lang="less">
  .van-grid {
    ::v-deep(.van-grid-item__content) {
      padding: 1px 5px;
      img {
        border-radius: 5px;
      }
    }
  }
</style>
