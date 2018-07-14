<template>
  <div class="home">
    <naviga>
       <!-- v-on:cexistence="showNation" v-on:generals="loadgenerals" -->
    </naviga>
    <h1>vuex.use=>{{ head }}</h1>

    <router-link to="/HelloWorld">HelloWorld</router-link>
    <left></left>

    <contents></contents>
    <right></right>
    
    <!-- {{ apipath.path }} -->
    <!-- {{ status }} -->
    <!-- <helloworld></helloworld> -->
    <!-- <countries v-bind:loading="Countries" v-bind:shogun="gener"></countries> -->
    
    

    <router-view/>

  </div>
</template>

<script>

import qs            from "qs"
import Naviga        from "./Naviga"
import HelloWorld    from './HelloWorld'
import Countries     from './Countries'
import Left          from './Left'
import Right         from './Right'
import Contents      from './Contents'


export default {
  name: '',

  data () {
    return {
      status:'',
      msg: 'Home', 
 
    }
  },

  computed:{
    head(){return this.$store.state.test.name}
  },

  components:{
    "naviga"     : Naviga,
    "helloworld" : HelloWorld,
    "countries"  : Countries,
    "left"       : Left,
    "right"      : Right,
    "contents"    : Contents
  },

  created(){
  this.$axios.get("/ThinkPHP5.0/public/index.php/admin/Dispose/testGet",
    {params:{}})
    .then(response =>{
      console.log(response.data);})
     .catch(err =>{console.log(err);});

   var instance = this.$axios.create({
    headers: {'content-type': 'application/x-www-form-urlencoded'}});
  instance.post(`/ThinkPHP5.0/public/index.php/admin/Dispose/testPost`,qs.stringify({name:"lap",psd:"123"})
   ).then(res => {console.log(res.data.back);});

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
