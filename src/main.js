import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify' // path to vuetify export
Vue.config.productionTip = false
import Vuetify from 'vuetify'

import zingchartVue from 'zingchart-vue';
Vue.component('zingchart', zingchartVue)
Vue.use(Vuetify, {
 iconfont: 'fa'
})
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  vuetify,
  
  icons: {
    iconfont: 'faSvg', // The bees knees, what most people are looking for.
  },
  render: h => h(App)
}).$mount('#app')














