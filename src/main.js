import Vue from 'vue'
import './plugins/vuetify'
import './plugins/image-viewer'
import App from './App.vue'
import router from './router'
import store from './store'
require('vue-image-lightbox/dist/vue-image-lightbox.min.css')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
