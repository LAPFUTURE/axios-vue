<template>
  <div class="naviga">
    <nav class="navbar navbar-default" role="navigation"> 
    <div class="container-fluid">
        <div class="navbar-header"> 
             <router-link to="/" style="color: black" class="navbar-brand">三国杀
             </router-link> 
        </div>
        <ul class="nav navbar-nav navbar-left">
          <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                烽火四起 <b class="caret"></b>
              </a>
            <ul class="dropdown-menu">
              <li>
                <router-link to="/Countries/wei" >
                <span class="glyphicon "></span> 魏</router-link>
              </li>

              <li>
                <router-link to="/Countries/shu" >
                <span class="glyphicon "></span> 蜀</router-link>
              </li>

              <li>
                <router-link to="/Countries/wu" >
                <span class="glyphicon "></span> 吴</router-link>
              </li>

              <li>
                <router-link to="/Countries/qun" >
                <span class="glyphicon "></span> 群</router-link>
              </li>
            </ul>
          </li>
          

          <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                问鼎中原 <b class="caret"></b>
              </a>
            <ul class="dropdown-menu">
             <li>
            <router-link to="/Countries/feng" >
            <span class="glyphicon "></span> 风林火山</router-link>
          </li>

          <li>
            <router-link to="/Countries/luan" >
            <span class="glyphicon "></span> 乱世英杰</router-link>
          </li>

           <li>
            <router-link to="/Countries/jie" >
            <span class="glyphicon "></span> 界限突破</router-link>
          </li>

           <li>
            <router-link to="/Countries/yi" >
            <span class="glyphicon "></span> 一将成名</router-link>
          </li>
            </ul>
          </li>

           <li><router-link to="/RegandLog/register">
           <span class="glyphicon glyphicon-user"></span> 注册</router-link>
           </li>

            <li><router-link to="/RegandLog/login">
           <span class="glyphicon glyphicon-user"></span> 登录</router-link>
           </li>

           <li class="sort">
             <form class="form-inline" role="form" v-on:submit="submitsort">
               <div class="form-group">
                 <label></label>
                 <input type="text" class="form-control input-md" placeholder="请输入要查找的内容" style="margin:10px;" v-model="content">
                 <button type="submit" class="btn btn-default">搜索</button>
               </div>
             </form>
           </li>
        </ul> 

        <ul class="nav navbar-nav navbar-right">
          <li>
            <router-link to="/RegandLog/loginadm">
            <span class="glyphicon glyphicon-user"></span> 管理员登录
            </router-link>
          </li>

          <li>
            <router-link to="/RegandLog/usercenter">
            <span class="glyphicon glyphicon-user"></span> 用户中心
            {{ this.$store.state.user }}
            </router-link>
          </li>
        </ul>
    </div> 
</nav>
      <!-- <div class="row" style="width:30%;">
        <div class="col-md-2"> -->
          <!--  <router-link to="/">
           <img src="http://127.0.0.1/ThinkPHP5.0/public/static/sgspicture/logo.png" >
           </router-link> -->
        <!-- </div>
      </div> -->
     <router-view/>
  </div>
</template>

<script>

import qs  from  "qs"

export default {
  name: 'Naviga',

  data(){
    return{
      msg:'Nav',
      content:''
    }
  },

  methods:{
    submitsort:function(ev){
      this.$axios.post(this.apipath.path+"/Dispose/sort",
        qs.stringify({name:this.content})).then(res=>{
        // console.log(res.data);
        this.$store.state.detail = res.data;
        // console.log("this.$store.state.detail",this.$store.state.detail);
        console.log('刘安平是傻逼');
        this.$router.push({ name: 'Details', params: { detail: res.data.id }});
        })
        .catch(err=>{console.log(err);});
    ev.preventDefault();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav{
  margin: 0 auto;
}
</style>
