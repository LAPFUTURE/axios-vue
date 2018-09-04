<template>
  <div class="countries">
    <naviga></naviga>
    <div v-if="countryBeing"> 
      <div v-if="'wei' === $route.params.id" class="wei">
          <h1>魏</h1>
            <table class="table table-hover" style="width:20%;display:inline-block;">
              <thead>
                <tr>
                   <th>一将成名</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="general in countrieswei">
                 <td v-if="'jie' !== general.category">
                  <router-link :to="{ name: 'Details', params: { detail:general.id }}">{{ general.name }}</router-link></td>
                </tr >
              </tbody>
            </table>

            <table class="table table-hover" style="width:20%;display:inline-block;">
                <thead>
                  <tr>
                    <th>风林火山</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="general in countrieswei">
                   <td  v-if="'feng' === general.category"><router-link :to="{ name: 'Details', params: { detail:general.id }}">{{ general.name }}</router-link></td>
                  </tr >
                </tbody>
            </table>

            <table class="table table-hover" style="width:20%;display:inline-block;">
                <thead>
                  <tr>
                    <th>界限突破</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="general in countrieswei">
                   <td  v-if="'jie' === general.category"><router-link :to="{ name: 'Details', params: { detail:general.id }}">{{ general.name }}</router-link></td>
                  </tr >
                </tbody>
            </table>
      </div>

      <div v-else-if="'shu' === $route.params.id" class="shu">
          <h1>蜀</h1>
          <table class="table table-hover" style="width:20%;display:inline-block;">
              <thead>
                <tr>
                   <th>一将成名</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="general in countriesshu">
                 <td v-if="'jie' !== general.category"><router-link :to="{ name: 'Details', params: { detail:general.id }}">{{ general.name }}</router-link></td>
                </tr >
              </tbody>
            </table>

            <table class="table table-hover" style="width:20%;display:inline-block;">
                <thead>
                  <tr>
                    <th>风林火山</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="general in countriesshu">
                   <td  v-if="'feng' === general.category"><router-link :to="{ name: 'Details', params: { detail:general.id }}">{{ general.name }}</router-link></td>
                  </tr >
                </tbody>
            </table>

            <table class="table table-hover" style="width:20%;display:inline-block;">
                <thead>
                  <tr>
                    <th>界限突破</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="general in countriesshu">
                   <td  v-if="'jie' === general.category"><router-link :to="{ name: 'Details', params: { detail:general.id }}">{{ general.name }}</router-link></td>
                  </tr >
                </tbody>
            </table>
       </div>

      <div v-else-if="'wu'  === $route.params.id" class="wu">
          <h1>吴</h1>
         <table class="table table-hover" style="width:20%;display:inline-block;">
              <thead>
                <tr>
                   <th>一将成名</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="general in countrieswu">
                 <td v-if="'jie' !== general.category"><router-link :to="{ name: 'Details', params: { detail:general.id }}">{{ general.name }}</router-link></td>
                </tr >
              </tbody>
            </table>

            <table class="table table-hover" style="width:20%;display:inline-block;">
                <thead>
                  <tr>
                    <th>风林火山</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="general in countrieswu">
                   <td  v-if="'feng' === general.category"><router-link :to="{ name: 'Details', params: { detail:general.id }}">{{ general.name }}</router-link></td>
                  </tr >
                </tbody>
            </table>

            <table class="table table-hover" style="width:20%;display:inline-block;">
                <thead>
                  <tr>
                    <th>界限突破</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="general in countrieswu">
                   <td  v-if="'jie' === general.category"><router-link :to="{ name: 'Details', params: { detail:general.id }}">{{ general.name }}</router-link></td>
                  </tr >
                </tbody>
            </table>
      </div>
      
      <div v-else-if="'qun' === $route.params.id" class="qun">
          <h1>群</h1>
          <table class="table table-hover" style="width:20%;display:inline-block;">
              <thead>
                <tr>
                   <th>一将成名</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="general in countriesqun">
                 <td v-if="'jie' !== general.category"><router-link :to="{ name: 'Details', params: { detail:general.id }}">{{ general.name }}</router-link></td>
                </tr >
              </tbody>
            </table>

            <table class="table table-hover" style="width:20%;display:inline-block;">
                <thead>
                  <tr>
                    <th>风林火山</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="general in countriesqun">
                   <td  v-if="'feng' === general.category"><router-link :to="{ name: 'Details', params: { detail:general.id }}">{{ general.name }}</router-link></td>
                  </tr >
                </tbody>
            </table>

            <table class="table table-hover" style="width:20%;display:inline-block;">
                <thead>
                  <tr>
                    <th>界限突破</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="general in countriesqun">
                   <td  v-if="'jie' === general.category"><router-link :to="{ name: 'Details', params: { detail:general.id }}">{{ general.name }}</router-link></td>
                  </tr >
                </tbody>
            </table>
      </div>

      <div v-else-if="'feng' === $route.params.id">
        <h1>风林火山</h1>
        <table class="table table-hover" style="width:40%;display:inline-block;
              position:relative;right:20%;top:200px;">
              <tbody>
                <tr>
                  <th>魏</th>
                  <td v-for="general in generalsfeng" v-if="'wei' === general.country">

                  <router-link :to="{ name: 'Details', params: { detail:general.id }}">{{ general.name }}</router-link></td>
                </tr>
                <tr><td></td></tr><tr><td></td></tr>
                  
                <tr>
                  <td></td>
                  <th>蜀</th>
                  <td v-for="general in generalsfeng" v-if="'shu' === general.country">
                  <router-link :to="{ name: 'Details', params: { detail:general.id }}">{{ general.name }}</router-link></td>
                </tr>
                <tr><td></td></tr> <tr><td></td></tr>
                  
                <tr>
                  <td></td><td></td>
                  <th>吴</th>
                  <td v-for="general in generalsfeng" v-if="'wu' === general.country">
                  <router-link :to="{ name: 'Details', params: { detail:general.id }}">{{ general.name }}</router-link></td>
                </tr>
                <tr><td></td></tr> <tr><td></td></tr><tr>
                 
                <tr><td></td><td></td><td></td>
                  <th>群</th>
                  <td v-for="general in generalsfeng" v-if="'qun' === general.country">
                  <router-link :to="{ name: 'Details', params: { detail:general.id }}">{{ general.name }}</router-link></td>
                </tr>
              </tbody>
            </table>
      </div>

      <div v-else-if="'luan' === $route.params.id">
        <h1>乱世英杰</h1>
        <table class="table table-hover" style="width:40%;display:inline-block;
              position:relative;right:20%;top:200px;">
              <tbody>
                <tr>
                  <th>魏</th>
                  <td v-for="general in generalsluan" v-if="'wei' === general.country">
                  
                  <router-link :to="{ name: 'Details', params: { detail:general.id }}">{{ general.name }}</router-link></td>
                </tr>
                <tr><td></td></tr><tr><td></td></tr>
                  
                <tr>
                  <td></td>
                  <th>蜀</th>
                  <td v-for="general in generalsluan" v-if="'shu' === general.country">
                  <router-link :to="{ name: 'Details', params: { detail:general.id }}">{{ general.name }}</router-link></td>
                </tr>
                <tr><td></td></tr> <tr><td></td></tr>
                  
                <tr>
                  <td></td><td></td>
                  <th>吴</th>
                  <td v-for="general in generalsluan" v-if="'wu' === general.country">
                  <router-link :to="{ name: 'Details', params: { detail:general.id }}">{{ general.name }}</router-link></td>
                </tr>
                <tr><td></td></tr> <tr><td></td></tr><tr>
                 
                <tr><td></td><td></td><td></td>
                  <th>群</th>
                  <td v-for="general in generalsluan" v-if="'qun' === general.country">
                  <router-link :to="{ name: 'Details', params: { detail:general.id }}">{{ general.name }}</router-link></td>
                </tr>
              </tbody>
            </table>
      </div>

      <div v-else-if="'jie' === $route.params.id">
        <h1>界限突破</h1>
        <table class="table table-hover" style="width:40%;display:inline-block;
              position:relative;right:20%;top:200px;">
              <tbody>
                <tr>
                  <th>魏</th>
                  <td v-for="general in generalsjie" v-if="'wei' === general.country">
                  
                  <router-link :to="{ name: 'Details', params: { detail:general.id }}">{{ general.name }}</router-link></td>
                </tr>
                <tr><td></td></tr><tr><td></td></tr>
                  
                <tr>
                  <td></td>
                  <th>蜀</th>
                  <td v-for="general in generalsjie" v-if="'shu' === general.country">
                  <router-link :to="{ name: 'Details', params: { detail:general.id }}">{{ general.name }}</router-link></td>
                </tr>
                <tr><td></td></tr> <tr><td></td></tr>
                  
                <tr>
                  <td></td><td></td>
                  <th>吴</th>
                  <td v-for="general in generalsjie" v-if="'wu' === general.country">
                  <router-link :to="{ name: 'Details', params: { detail:general.id }}">{{ general.name }}</router-link></td>
                </tr>
                <tr><td></td></tr> <tr><td></td></tr><tr>
                 
                <tr><td></td><td></td><td></td>
                  <th>群</th>
                  <td v-for="general in generalsjie" v-if="'qun' === general.country">
                  <router-link :to="{ name: 'Details', params: { detail:general.id}}">{{ general.name }}</router-link></td>
                </tr>
              </tbody>
            </table>
      </div>
      
      <div v-else-if="'yi' === $route.params.id">
        <h1>一将成名</h1>
        <table class="table table-hover" style="width:40%;display:inline-block;
              position:relative;right:20%;top:200px;">
              <tbody>
                <tr>
                  <th>魏</th>
                  <td v-for="general in generalsyi" v-if="'wei' === general.country">
                  
                  <router-link :to="{ name: 'Details', params: { detail:general.id }}">{{ general.name }}</router-link></td>
                </tr>
                <tr><td></td></tr><tr><td></td></tr>
                  
                <tr>
                  <td></td>
                  <th>蜀</th>
                  <td v-for="general in generalsyi" v-if="'shu' === general.country">
                  <router-link :to="{ name: 'Details', params: { detail:general.id }}">{{ general.name }}</router-link></td>
                </tr>
                <tr><td></td></tr> <tr><td></td></tr>
                  
                <tr>
                  <td></td><td></td>
                  <th>吴</th>
                  <td v-for="general in generalsyi" v-if="'wu' === general.country">
                  <router-link :to="{ name: 'Details', params: { detail:general.id }}">{{ general.name }}</router-link></td>
                </tr>
                <tr><td></td></tr> <tr><td></td></tr><tr>
                 
                <tr><td></td><td></td><td></td>
                  <th>群</th>
                  <td v-for="general in generalsyi" v-if="'qun' === general.country">
                  <router-link :to="{ name: 'Details', params: { detail:general.id }}">{{ general.name }}</router-link></td>
                </tr>
              </tbody>
            </table>
      </div>

    </div>
  </div>
</template>

<script>

import Naviga        from './Naviga'
import { mapState }  from 'vuex'

export default {
  name: 'Countries',

  components:{
    "naviga"   : Naviga,
  },
  
  computed:mapState({
    countryBeing : state=>state.generals.wei,//一开始generals为空，用来判断存在
    countrieswei : state=>state.generals.wei,
    countriesshu : state=>state.generals.shu,
    countrieswu  : state=>state.generals.wu,
    countriesqun : state=>state.generals.qun,
    generalsfeng : state=>state.generals.feng,
    generalsluan : state=>state.generals.luan,
    generalsjie  : state=>state.generals.jie,
    generalsyi   : state=>state.generals.yi
  }), 

  created(){
    // console.log(this.$store.state.generals);
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
