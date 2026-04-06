import DefaultTheme from 'vitepress/theme'
import AuthorCard from './AuthorCard.vue'
import { h } from 'vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h('div', [
        h(AuthorCard)
      ])
    })
  },
  enhanceApp({ app, router, siteData }) {
    // 可以在这里扩展全局组件，例如文章头部信息（阅读量）
  }
}
