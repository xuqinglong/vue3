import home from '@/views/home/home.vue'
import index from '@/views/home/index.vue'
import meat from '@/views/meat/meat.vue'
import girl from '@/views/girl/girl.vue'
import outUrl from '@/views/out/outUrl.vue'
import articleList from '@/views/home/articleList.vue'
import { RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: index,
    redirect: '/home',
    meta: {
      title: '首页',
      keepAlive: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        component: home,
        meta: {
          title: '首页',
          keepAlive: true
        }
      },
      {
        path: '/meat',
        name: 'meat',
        component: meat,
        meta: {
          title: '干货',
          keepAlive: true
        }
      },
      {
        path: '/girl',
        name: 'girl',
        component: girl,
        meta: {
          title: '妹子',
          keepAlive: true
        }
      }
    ]
  },
  {
    path: '/outUrl',
    name: 'outUrl',
    component: outUrl,
    meta: {
      title: '详情',
      keepAlive: false
    }
  },
  {
    path: '/articleList/:type/:category',
    name: 'articleList',
    component: articleList,
    props: true,
    meta: {
      title: '文章列表',
      keepAlive: false
    }
  }
]
export default routes
