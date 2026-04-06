import DefaultTheme from 'vitepress/theme'
import Twikoo from './Twikoo.vue'
import AuthorCard from './AuthorCard.vue'
import { h } from 'vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h('div', [
        h(AuthorCard),
        h(Twikoo)
      ])
    })
  },
  enhanceApp({ app, router, siteData }) {
    // 可以在这里扩展全局组件，例如文章头部信息（阅读量）
  }
}
