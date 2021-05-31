<template>
  <div class="content">
    <van-pull-refresh v-model="state.refreshing" class="van-pull-refresh" @refresh="onRefresh">
      <van-list v-model:loading="state.loading" :finished="state.finished" finished-text="没有更多了" @load="onLoad">
        <van-cell v-for="(item, index) in state.list" :key="index">
          <van-image v-if="item.images && item.images.length > 0" :src="item.images[0]" alt="" fit="cover" />
          <van-image v-else :src="'https://gank.io/images/b89f9d0fada34a3898191298eda3b50e'" alt="" fit="cover" />
          <div class="item-info">
            <p>{{ item.title }}</p>
            <p>作者：{{ item.author }}</p>
            <p>时间：{{ item.publishedAt }}</p>
          </div>
        </van-cell>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script lang="ts">
  import { reactive } from 'vue'
  import { getArticleList } from '@/api/home'
  import { PullRefresh, List, Cell, Image } from 'vant'

  export default {
    name: 'ArticleList',
    components: {
      [PullRefresh.name]: PullRefresh,
      [List.name]: List,
      [Cell.name]: Cell,
      [Image.name]: Image
    },
    props: {
      type: {
        type: String,
        default: '',
        required: true
      },
      category: {
        type: String,
        default: '',
        required: true
      }
    },
    setup(props: any) {
      const state = reactive({
        list: [],
        loading: false,
        finished: false,
        page_count: 0,
        page: 0,
        refreshing: false
      })
      const onLoad = () => {
        if (state.refreshing) {
          state.list = []
          state.page = 0
          state.page_count = 0
          state.refreshing = false
        }
        getArticleList(props.category as string, props.type as string, state.page + 1, 30)
          .then((res: any) => {
            state.list.push(...((res.data as Array<never>) || []))
            state.page_count = res.page_count || 0
            state.page = res.page || 0
          })
          .catch(error => {
            console.log(error)
          })
          .finally(() => {
            state.loading = false
            if (state.page === state.page_count || state.page_count === 0) {
              state.finished = true
            }
          })
      }
      const onRefresh = () => {
        // 清空列表数据
        state.finished = false

        // 重新加载数据
        // 将 loading 设置为 true，表示处于加载状态
        state.loading = true
        onLoad()
      }

      return {
        state,
        onLoad,
        onRefresh
      }
    }
  }
</script>

<style scoped lang="less">
  .content {
    .van-pull-refresh {
      height: 100%;
      overflow-y: auto;
      .van-cell {
        ::v-deep(.van-cell__value) {
          height: 90px;

          .van-image {
            display: inline-block;

            ::v-deep(.van-image__img, .van-cell__value--alone) {
              border-radius: 5px;
            }

            width: 90px;
            height: 90px;

            img {
              border-radius: 5px;
            }
          }

          .item-info {
            width: calc(100% - 100px);
            display: inline-block;
            height: 90px;
            margin-left: 10px;

            p {
              font-size: 14px;
              width: 100%;
              color: #999999;
              display: block;
              line-height: 30px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box; /* 将对象作为弹性伸缩盒子模型显示 */
              -webkit-line-clamp: 1; /* 控制最多显示几行 */
              -webkit-box-orient: vertical; /* 设置或检索伸缩盒对象的子元素的排列方式 */

              &:first-child {
                font-size: 16px;
                color: black;
              }
            }
          }
        }
      }
    }
  }
</style>
