import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style/theme.css'
import BLBlockQuote from '../components/BLBlockQuote.vue'
import BLImg from '../components/BLImg.vue'
import BLThemeImg from '../components/BLThemeImg.vue'
import BLSponsor from '../components/BLSponsor.vue'

// export default {
//   ...Theme,
// };

export default {
  extends: DefaultTheme,
  async enhanceApp({ app }) {
    // register your custom global components
    app.component('bl-blockquote', BLBlockQuote).component('bl-img', BLImg).component('bl-theme-img', BLThemeImg).component('bl-sponsor', BLSponsor)
  }
} satisfies Theme
