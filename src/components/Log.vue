<template>
  <div class="log">
    <naviga></naviga>
    <h1>{{ msg }}</h1>
    <div style="padding: 100px 100px 10px;" >
      <form class="bs-example bs-example-form" role="form" v-on:submit="submits" >
          <br>
          <div class="input-group">
              <span class="input-group-addon">账号：</span>
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
              <input type="submit" class="btn btn-default" 
              value="登录" 
              >
          </div>
          <br>
      </form>
    </div>
  </div>
</template>

<script>

import qs       from "qs"
import Naviga   from "./Naviga"  

export default {
  name: 'Log',

  data () {
    return {
      msg: 'Welcome Log!',
      username:'',
      usernumber:'',
      userpsd:'',
    }
  },

  components:{
     "naviga":Naviga
  },

  methods:{
    submits:function(ev){
      this.$axios.post(this.apipath.path+"/Regandlog/log",
        qs.stringify({usernumber : this.usernumber,
                      userpsd    : this.userpsd
                      })
      ).then(res=>{alert("Welcome back," + res.data.res[0]["othername"]);console.log(res.data.message);}).catch(err =>{console.log(err);});
      ev.preventDefault();
    } 
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.register{
    /*background: url("http://127.0.0.1/ThinkPHP5.0/public/static/sgspicture/main.jpg");*/
}

span{width: 33%;}
/*input{width: 100%;}*/
form div{margin: 0 auto;}
</style>
