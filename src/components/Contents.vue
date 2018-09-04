<template>
  <div class="contents">
    <br>
     <div class="row">
     <div class="col-md-4" style="box-shadow: 3px 3px 5px black;border-radius:5px;">
        <router-link to="/Countries/shu">
          <img src="/static/img/zgl1.jpg" style="width:100%;height:100%;">
        </router-link></div>
     <div class="col-md-4" style="box-shadow: 3px 3px 5px black;border-radius:5px;">
        <router-link to="/Countries/wu">
          <img src="/static/img/bls.jpg" style="width:100%;height:100%;">
        </router-link>
    </div>

      <div class="col-md-4" style="box-shadow: 3px 3px 5px black;border-radius:5px;">
        <router-link to="/Countries/wei">
          <img src="/static/img/guojia1.jpg" style="width:100%;height:100%;">
        </router-link>
        </div>
      </div>

    <div class="panel panel-info" style="margin:4% auto;">
        <div class="panel-heading">
          <p>用户评论区</p>
        </div>
        <div class="panel-body" v-for="comment in this.$store.state.comment">
           <p>{{ comment.othername }}:{{ comment.comment }}</p>
           <div  style="width:100%;height:1px;background-color:black;"></div>
        </div>
       <div class="panel-footer">
          <router-link to="/RegandLog/usercenter">
            <p>登录后参与评论...</p>
          </router-link>
        </div>
    </div>

  </router-view>
  </div>
</template>
<script>

export default {
  name: 'Contents',
  data () {
    return {
      msg: 'Contents',
      
    }
  },
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
