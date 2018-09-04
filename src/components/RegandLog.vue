<template>
  <div class="register">
    <naviga></naviga>
    <div v-if="'register' === $route.params.id">
      <h1>{{ msg }}</h1>
      <div style="padding: 160px 160px 10px 40px;" >
        <form class="bs-example bs-example-form" role="form" v-on:submit="submitreg">
            <div class="input-group">
                <span class="input-group-addon">用户名：</span>
                <input type="text" class="form-control" placeholder="请输入昵称"
                v-model="username">
            </div>
            <br>
            <div class="input-group">
                <span class="input-group-addon">注册账号：</span>
                <input type="text" class="form-control" placeholder="请输入数字"
                v-model="usernumber">
            </div>
            <br>
            <div class="input-group">
                <span class="input-group-addon">密码：</span>
                <input type="text" class="form-control" placeholder="请输入密码"
                v-model="userpsd">
            </div>
            <br>
            <div class="input-group">
                <span class="input-group-addon">确认密码：</span>
                <input type="text" class="form-control" placeholder="确认密码">
            </div>
            <br>
            <div class="input-group">
                <input type="submit" class="btn btn-default" value="注册">
            </div>
            <br>
        </form>
      </div>
    </div>
    
    <div v-if="'login' === $route.params.id">
      <h1>{{ msg1 }}</h1>
      <div style="padding: 180px 160px 10px 40px;" >
      <form class="bs-example bs-example-form" role="form" v-on:submit="submitlog" >
          <br>
          <div class="input-group">
              <span class="input-group-addon">账号：</span>
              <input type="text" class="form-control" 
                     placeholder="请输入数字"
                     v-model="lognumber">
          </div>
          <br>
          <div class="input-group">
              <span class="input-group-addon">密码：</span>
              <input type="text" class="form-control" 
                     placeholder="请输入密码"
                     v-model="logpsd">
          </div>

          <br>
          <div class="input-group">
              <input type="submit" class="btn btn-default" value="登录">
          </div>
          <br>
      </form>
       </div>
    </div>
    
    <div v-if="'loginadm' === $route.params.id">
      <h1>{{ msg2 }}</h1>
      <div style="padding: 180px 160px 10px 40px;" >
        <form class="bs-example bs-example-form" role="form" v-on:submit="submitadm" >
            <br>
            <div class="input-group">
                <span class="input-group-addon">管理员账号：</span>
                <input type="text" class="form-control" 
                       placeholder="请输入数字"
                       v-model="admnumber">
            </div>
            <br>
            <div class="input-group">
                <span class="input-group-addon">管理员密码：</span>
                <input type="text" class="form-control" 
                       placeholder="请输入密码"
                       v-model="admpsd">
            </div>
            <br>
            <div class="input-group">
                <input type="submit" class="btn btn-default" value="登录" >
            </div>
            <br>
        </form>
      </div>
    </div>

    <div v-if="'usercenter' === $route.params.id">
      <h1>UserCenter</h1>
      <input type="submit" class="btn btn-danger" value="退出登录" v-on:click="quit" style="right:10%;position:absolute;display:block;">

        <div v-if="this.$store.state.comment[0]">
            <div class="panel panel-info" style="margin:4% 20%;">
                <div class="panel-heading">
                  <p>我的评论</p>
                </div>

                <div class="panel-body" v-for="comment in this.$store.state.comment">
                   <span style="font-size:20px;">{{comment.id}}:</span>{{ comment.comment }}
                   <div style="text-align:right;">
                        <button class="btn btn-danger btn-xs" v-on:click="deletecomment">删除{{comment.id}}</button>
                    </div>
                </div>

               <div style="width:100%;height:1px;background-color:black;"></div>
            </div>
        </div>

       <!--  <div v-if="this.$store.state.comment[0]" style="display:inline-block;" >
            <h1>我的评论</h1>
            <div v-for="comment in this.$store.state.comment" style="color:black;border:1px solid black">
              
                <div style="overflow-y:scroll;width:500px;height:100px;font-size:16px;">
                    <span style="font-size:20px;">{{comment.id}}:</span>{{ comment.comment }}
                </div>

                <div><button class="btn btn-danger btn-xs" v-on:click="deletecomment">删除{{comment.id}}</button></div>
            </div>
        </div> -->

      

      <div v-if="this.$store.state.collection[0]">
        <h1>collection</h1>

          <table class="table table-hover" style="position:relative;top:100px;">
              <thead>
                <tr>
                  <th>武将</th>
                  <th>国家</th>
                  <th>技能</th>
                  <th>删除</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="collection in this.$store.state.collection">
                  <th>
                    <router-link :to="{ name: 'Details', params: { detail: collection.generalid }}">
                  {{ collection.content }}</router-link>
                  </th>
                  <th>{{ collection.country }}</th>
                  <th>{{ collection.skills }}</th>
                  <th><button v-on:click="submitdelete" class="btn btn-xs btn-danger">{{collection.content}}</button></th>
                </tr>
              </tbody>
          </table>
      </div>

      


    </div>

    <div v-if="'admincenter' == $route.params.id">
      <p> {{ $route.params.id }} </p>
      <h1>admincenter</h1>
      <!-- {{ this.$store.state.allusers }} -->

      <table class="table table-hover" style="position:relative;top:100px;">
              <thead>
                <tr>
                  <th>id</th>
                  <th>othername</th>
                  <th>usernumber</th>
                  <th>删除</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in this.$store.state.allusers">
                  <th>
                  {{ user.id }}
                  </th>
                  <th>{{ user.othername }}</th>
                  <th>{{ user.user_number }}</th>
                  <th><button v-on:click="deleteUser" class="btn btn-xs btn-danger">{{user.othername}}</button></th>
                </tr>
              </tbody>
          </table>
    </div>
    
  </div>
</template>

<script>

import qs       from "qs"
import Naviga   from "./Naviga"  
import Footers  from "./Footers"

export default {
  name: 'Register',
  
  beforeRouteEnter(to,from,next){
  if((to.fullPath === "/RegandLog/usercenter") &&(this == undefined))
    {alert("您未登录,即将前往登录界面！");
    
     next('/RegandLog/login')}
  next();},//第一次进入/RegandLog的/RegandLog/usercenter,进行判断，避免未登录进入用户中心
          //有点小bug，可以用cookie解决】
  beforeRouteUpdate(to,from,next){console.log(this.$store.state.user);
  if(to.fullPath === "/RegandLog/usercenter" && this.$store.state.user == ''){
    alert("您未登录,即将前往登录界面！！");// console.log(this);
    next('/RegandLog/login');
  }else{next();}},//从/RegandLog的其他路由进入到/RegandLog/usercenter，进行判断，避免未登录进入用户中心

  data () {
    return {
      msg  : 'Welcome Register!',
      msg1 : 'Welcome Login',
      msg2 : 'Welcome Administrator',
      
      username   : '',
      usernumber : '',
      userpsd    : '',
      
      deleteid   : '',

      lognumber  : '',
      logpsd     : '',

      admnumber  : '',
      admpsd     : '',
    }
  },

  components:{
     "naviga"  : Naviga,
     "footers" : Footers
  },

  methods:{
    //用户注册账号
    submitreg:function(ev){
        this.$axios.post(this.apipath.path+"/Regandlog/register",
        //'ThinkPHP5.0/public/index.php/admin /Regandlog/register'
        qs.stringify({
            username   : this.username,
            userpsd    : this.userpsd,
            usernumber : this.usernumber
        })
      ).then(res=>{alert(res.data);
        console.log(res.data);
    }).catch(err =>{console.log(err);});
       ev.preventDefault();
    },

    //用户登录
    submitlog:function(ev){
      this.$axios.post(this.apipath.path+"/Regandlog/log",
        qs.stringify({usernumber : this.lognumber,
                      userpsd    : this.logpsd  })  
      ).then(res=>{alert("欢迎回来,"+res.data.username+",即将前往用户中心!");
      this.$store.state.user       = res.data.username;
      // console.log(this.$store.state.user);
      this.$store.state.collection = res.data.collection;
      this.$store.state.comment    = res.data.comment;
      this.$router.push({ name: 'RegandLog', params: { id: 'usercenter' }});//跳转到用户中心
      // console.log(this.$store.state.collection[0].content);
    }).catch(err =>{console.log(err);});
      ev.preventDefault();
    },
    //用户注销
    quit:function(ev){
      this.$store.commit('quit');
      alert("退出成功,即将前往主界面");
      this.$router.push({ name: 'Home'});
    },
    
    //管理员登录
    submitadm:function(ev){
      this.$axios.post(this.apipath.path+"/Regandlog/adm",
        qs.stringify({usernumber : this.admnumber,
                      userpsd    : this.admpsd
                      })
      ).then(res=>{
       alert(res.data.message);
      if(res.data.message == '管理员登录成功!即将前往登录界面.'){
      this.$router.push({ name: 'RegandLog', params: { id: 'admincenter' }});//跳转到管理员页面
      this.$store.state.allusers = res.data.res;
      //console.log(this.$store.state.allusers[0].othername);
      }else{alert(res.data.message);}
      }).catch(err =>{console.log(err);});
      ev.preventDefault();
    },
    
    //用户收藏删除
    submitdelete:function(btn){
      var $a = String(btn.currentTarget.innerHTML);
      this.$axios.post(this.apipath.path+"/Regandlog/collectionDelete",
        qs.stringify({username:this.$store.state.user,
                      collection:$a,})
       ).then(res=>{alert(res.data.message);
       this.$store.state.collection = res.data.collection;
     }).catch(err =>{console.log(err);});
       btn.preventDefault();
    },
    
    //删除用户
    deleteUser:function(btn){
       var $b = String(btn.currentTarget.innerHTML);
      this.$axios.post(this.apipath.path+"/Regandlog/deleteUser",
        qs.stringify({usertodel:$b})
       ).then(res=>{
        // console.log(res);
       alert(res.data.message);
       this.$store.state.allusers = res.data.allusers;
       // console.log(this.$store.state.allusers);
     }).catch(err =>{console.log(err);});
       btn.preventDefault();
    },

    //删除评论
    deletecomment:function(){

    }
    
  },

  created(){
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

span{width: 33%;}
form div{margin: 0 auto;}
</style>
