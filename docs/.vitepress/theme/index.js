import DefaultTheme from 'vitepress/theme'
import Twikoo from './Twikoo.vue'
import { h } from 'vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h(Twikoo)
    })
  },
  enhanceApp({ app, router, siteData }) {
    // 可以在这里扩展全局组件，例如文章头部信息（阅读量）
  }
}
