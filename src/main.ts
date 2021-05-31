import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import routes from '@/routes/routes'
import { createRouter, createWebHistory } from 'vue-router'
import { createStore } from 'vuex'
import user from '@/stores/user'
import loading from '@/directives/loading'
import { Icon } from 'vant'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, form, next) => {
  document.title = to.meta.title as string
  next()
})

const store = createStore({
  modules: {
    user: user
  }
})
app.use(loading)
app.use(Icon)
app.use(store)
app.use(router)
app.mount('#app')
