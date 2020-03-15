import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element-ui.js'
import './plugins/aplayer.js'
import './assets/css/global.css'
import 'github-markdown-css/github-markdown.css'
import axios from "axios"

Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://127.0.0.1:8888/'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
