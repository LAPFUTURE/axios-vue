<template>
  <div class="naviga">
    <nav class="navbar navbar-default" role="navigation"> 
    <div class="container-fluid">
        <div class="navbar-header"> 
             <router-link to="/" style="color: black" class="navbar-brand">三国杀
             </router-link> 
        </div>
        <ul class="nav navbar-nav navbar-left"> 
          <li v-on:click="goCountries('wei')">
            <router-link to="/Countries" >
            <span class="glyphicon "></span> 魏</router-link>
          </li>
          
          <li v-on:click="goCountries('shu')">
            <router-link to="/Countries" >
            <span class="glyphicon "></span> 蜀</router-link>
          </li>


          <li v-on:click="goCountries('wu')">
            <router-link to="/Countries" >
            <span class="glyphicon "></span> 吴</router-link>
          </li>

          <li v-on:click="goCountries('qun')">
            <router-link to="/Countries" >
            <span class="glyphicon "></span> 群</router-link>
          </li>

           <li><a href="feng.php"><span class="glyphicon "></span>风林火山</a></li>
           <li><a href="luan.php"><span class="glyphicon "></span> 乱世英杰</a></li>
           <li><a href="jie.php"><span class="glyphicon "></span> 界限突破</a></li>
           <li><a href="yi.php"><span class="glyphicon "></span> 一将成名</a></li>

           <li><router-link to="/Register">
           <span class="glyphicon glyphicon-user"></span> 注册</router-link>
           </li>

            <li><router-link to="/Log">
           <span class="glyphicon glyphicon-user"></span> 登录</router-link>
           </li>

           <li class="sort">
             <form class="form-inline" role="form" method="post" action="sort.php">
             <div class="form-group">
               <label></label>
               <input type="text" class="form-control input-md" name="wujiang" placeholder="请输入要查找的内容" style="margin:10px;">
               <button type="submit" class="btn btn-default" name="sort">搜索</button>
             </div>
               
             </form>
           </li>
        </ul> 

         <ul class="nav navbar-nav navbar-right">
          <li><a href="http://localhost/SGS/adminstor_denglu.php"><span class="glyphicon glyphicon-log-in"></span> 管理员登录</a></li> 
          <li><a href="user_center.php"><span class="glyphicon "></span>用户中心</a></li>
           <li><a href="#"><span class="glyphicon "></span>

           </a></li>
       </ul>
    </div> 
</nav>
     <router-view/>
    <h1>{{ msg }}</h1>
     
  </div>
</template>

<script>

import qs from "qs"

export default {
  name: 'Naviga',
 
  data () {
    return {
      msg:'',
      nation:'',
      countriesWei:false,
      countriesShu:false,
      countriesWu:false,
      countriesQun:false,
      sgs_general:[]
    }
  },

  methods:{
    goCountries(a){
      this.nation = a;
      this.$axios.post(this.apipath.path+"/Dispose/countries",qs.stringify({countries:this.nation})).then(res=>{
         // console.log(res);
          this.countriesWei = false; this.countriesShu = false;
          this.countriesWu  = false; this.countriesQun = false;
          this.sgs_general  = [];

          this.countriesWei = res.data.countriesWei;
          this.countriesShu = res.data.countriesShu;
          this.countriesWu  = res.data.countriesWu;
          this.countriesQun = res.data.countriesQun;
          this.sgs_general  = res.data.sgs_general
          
          this.$emit("cexistence",
                     this.countriesWei,
                     this.countriesShu,
                     this.countriesWu,
                     this.countriesQun,
                     );
          console.log("this.countriesWei:",this.countriesWei);
          console.log("this.countriesShu:",this.countriesShu);
          this.$emit("generals",this.sgs_general);
          console.log("this.sgs_general(传值成功):",this.sgs_general);
      });
     
    }
  },


  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
