<template>
  <div class="countries">
    <naviga v-on:cexistence="showNation" v-on:generals="loadgenerals">
    </naviga>
    <!-- {{ msg }} -->
    <!-- {{ shogun[1]}}:{{ shogun[1]["name"] }} -->
   
    {{ Countries.countriesWei }}
  
   <div v-if="Countries.countrieWei">
    <h1>魏</h1>
    {{ gener[0]["name"] }}
   </div>

   <div v-if="Countries.countrieShu">
   <h1>蜀</h1>
    {{ gener[0]["name"] }}
    </div>

   <div v-if="Countries.countrieWu">
    <h1>吴</h1>
    {{ gener[0]["name"] }}
   </div>
   
   <div v-if="Countries.countrieQun">
    <h1>群</h1>
    {{ gener[0]["name"] }}
   </div>

  </div>
</template>

<script>

import qs       from "qs"
import Naviga   from './Naviga'

export default {
  name: 'Countries',

  data () {
    return {
      msg: 'Countries',
       Countries:{
                 "countrieWei": false,
                 "countrieShu": false,
                 "countrieWu": false,
                 "countrieQun": false},
      gener:[]
    }
  },

  components:{
    "naviga":Naviga
  },

  methods:{
    loadgenerals:function(g){
    this.gener = g;
    // console.log("Countries-this.gener:",this.gener);
    },

   showNation:function(b,c,d,e){
      this.Countries.countrieWei   = b;
      this.Countries.countrieShu   = c;
      this.Countries.countrieWu    = d;
      this.Countries.countrieQun   = e;
      console.log("b:",b);
      console.log("c:",c);
      // console.log("Countries-this.Countries.countriesWei:",this.Countries.countriesWei);
    }
  },
 
  created(){
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*h1, h2 {
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
}*/
</style>
