import { h } from 'vue';
import { EnhanceAppContext } from 'vitepress';
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client';
import DefaultTheme from 'vitepress/theme';
import FooterLinks from './components/FooterLinks.vue';
import LocZoomImg from './components/LocZoomImg.vue';
import LocList from './components/LocList.vue';
import './index.css';

export default {
  ...DefaultTheme,

  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(FooterLinks),
      'home-features-after': () => h(LocList),
    });
  },

  enhanceApp(ctx: EnhanceAppContext) {
    DefaultTheme.enhanceApp(ctx);

    enhanceAppWithTabs(ctx.app);
    ctx.app.component('LocZoomImg', LocZoomImg);
  },
};
