import Vue from 'vue';
import APlayer from '@moefe/vue-aplayer';

Vue.use(APlayer, {
  defaultCover: 'https://github.com/u3u.png', // set the default cover
  productionTip: false, // disable console output
});