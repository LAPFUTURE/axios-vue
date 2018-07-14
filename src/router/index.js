import Vue         from 'vue'
import Router      from 'vue-router'
import HelloWorld  from '@/components/HelloWorld'
import Home        from '@/components/Home'
import Countries   from '@/components/Countries'
import Register    from '@/components/Register'
import Log         from '@/components/Log'

Vue.use(Router)

export default new Router({
  routes: [ 
    {path: '/',             name: 'Home',       component: Home  },
    {path: '/HelloWorld',   name: 'HelloWorld', component: HelloWorld },
    {path: '/Countries',    name: 'Countries',  component: Countries},
    {path: '/Register',     name: 'Register',   component: Register},
    {path: '/Log',          name: 'Log',        component: Log},
  ],

  mode:'history'

})
