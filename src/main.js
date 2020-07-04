import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css' //ruta relativa
//importar librerias externas
import Chart from 'chart.js'
import Chartick from 'vue-chartkick'
import { VueSpinners } from '@saeris/vue-spinners'

import router from '@/router'
import { dollarFilter, percentFilter } from '@/fiters'

require('./plugins/fontawesome');

Vue.use(VueSpinners)
Vue.use(Chartick.use(Chart))
Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
