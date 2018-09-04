<template>
  <div class="home">
      <naviga></naviga>
      <carousel></carousel>
      <contents></contents>
      <footers></footers>
      <router-view></router-view>
  </div>
</template>

<script>
import qs            from "qs"
import Naviga        from "./Naviga"
import Countries     from './Countries'
import Left          from './Left'
import Right         from './Right'
import Contents      from './Contents'
import Carousel      from './Carousel'
import Footers       from './Footers'

export default {

  name: 'home',

  data () {
    return {
      status:'',
      msg: 'Home',
      
    }
  },

  components:{
    "naviga"     : Naviga,
    "countries"  : Countries,
    "left"       : Left,
    "right"      : Right,
    "contents"   : Contents,
    "carousel"   : Carousel,
    "footers"    : Footers
  },
 
  created(){
    
    this.$axios.post(this.apipath.path+"/Dispose/generals").then(res=>{      
      this.$store.state.generals = res.data;
      this.$store.state.comment  = res.data.comment; 
    }).catch(err=>{console.log(err);});
  },
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
