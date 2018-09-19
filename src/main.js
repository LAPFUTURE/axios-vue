// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue        from 'vue'
import App        from './App'
import {store}    from'./store/store'
import router     from './router'
import Axios      from "axios"

Vue.prototype.$axios     = Axios
Vue.config.productionTip = false
Vue.prototype.apipath    = {path:'ThinkPHP5.0/public/index.php/admin'}
// Vue.prototype.sgspicture = {path:'http://127.0.0.1/ThinkPHP5.0/public/static/'}


// Axios.defaults.baseURL = "http://127.0.0.1/"
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template:'<App/>'
})


