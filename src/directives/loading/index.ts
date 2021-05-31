import VLoading from '@/components/loading/loading.vue'
import { createVNode, render, App } from 'vue'
import { VNode } from '@vue/runtime-core'
export default {
  install(Vue: App<Element>) {
    let loadingNode: VNode | any
    Vue.directive('loading', {
      beforeMount(el: HTMLElement | any, binding: any) {
        if (!['relative', 'absolute'].includes(el.style.position)) {
          el.style.position = 'relative'
        }
        loadingNode = createVNode(VLoading, {}, {})
        loadingNode.appContext = Vue._context // 这句很关键，关联起了数据
        render(loadingNode, el)
        if (binding.value) {
          loadingNode.component.ctx.show()
        } else {
          loadingNode.component.ctx.hide()
        }
      },
      updated(el: HTMLElement | any, binding: any) {
        if (binding.value) {
          loadingNode.component.ctx.show()
        } else {
          loadingNode.component.ctx.hide()
        }
      }
    })
  }
}
