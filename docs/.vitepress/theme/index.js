import DefaultTheme from 'vitepress/theme'
import SiteLayout from './SiteLayout.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: SiteLayout,
  enhanceApp({ app, router, siteData }) {}
}
