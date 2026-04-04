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
    // Custom enhancements
  }
}
