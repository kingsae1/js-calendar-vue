import Vue from 'vue'
import root from './root.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

/* eslint-disable no-new */
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  el: '#root',
  render: h => h(root),
})
