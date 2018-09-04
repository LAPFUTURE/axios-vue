import Vue         from 'vue'
import Router      from 'vue-router'
import Home        from '@/components/Home'
import Countries   from '@/components/Countries'
import RegandLog   from '@/components/RegandLog'
import Details     from '@/components/Details'
import Carousel    from '@/components/Carousel'

Vue.use(Router)

const router = new Router({
  routes: [ 
    {path: '/',                 name: 'Home',       component: Home       },
    
    {path: '/Countries/:id',    name: 'Countries',  component: Countries, },
     
    {path: '/RegandLog/:id',    name: 'RegandLog',  component: RegandLog, },    
    
    {path: '/Details/:detail',  name: 'Details',    component: Details,   },
     
    
  ],

  mode:'history'

})

export default router
