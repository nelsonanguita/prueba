import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify' // path to vuetify export
Vue.config.productionTip = false
import Vuetify from 'vuetify'
import 'bootstrap/dist/css/bootstrap.css'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
import HighchartsVue from 'highcharts-vue'

//Mapas
import Highcharts from 'highcharts'
import stockInit from 'highcharts/modules/stock'
import mapInit from 'highcharts/modules/map'
import addWorldMap from './js/worldmap'
import addValpoMap from './js/valparaiso'
import addMauleMap from './js/maule'
import addRancaguaMap from './js/rancagua'
import addSantiago2Map from './js/santiago2'
import addAricaMap from './js/arica'
import addAntofagastaMap from './js/antofagasta'

//selector
import vSelect from 'vue-select'

Vue.component('v-select', vSelect)



//stockInit(Highcharts)
mapInit(Highcharts)
addWorldMap(Highcharts)
//addValpoMap(Highcharts)
//addMauleMap(Highcharts)
//addRancaguaMap(Highcharts)
//addSantiago2Map(Highcharts)
//addAricaMap(Highcharts)



Vue.use(HighchartsVue)
Vue.use(Vuetify, {
 iconfont: 'fa'
})
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(Chartkick.use(Chart))
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  vuetify,
  axios,
  Chartkick,
  icons: {
    iconfont: 'faSvg', // The bees knees, what most people are looking for.
  },
  


  render: h => h(App)
}).$mount('#app')














