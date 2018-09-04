<template>
  <div class="details">
    <naviga></naviga>
         <!-- {{ this.$router.params.id}} -->
         <h1>{{ details.name }}</h1>
        <div class="row">
        <div class="panel panel-info col-md-3" style="margin:4% auto;width:35%;">
            <div class="panel-body">
               {{ details.introduce }} 
            </div>
        </div>

          <div style="width:30%;margin:0 auto;" class="col-md-4">
              <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="2500" style="opacity:1;
                     box-shadow: 0px 0px 30px black;">
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>   
               
                <div class="carousel-inner">
                    <div class="item active">
                        <img v-bind:src="picture3"  alt="First slide">
                    </div>
                    <div class="item">
                        <img v-bind:src="picture2" alt="Second slide">
                    </div>
                    <div class="item">
                        <img v-bind:src="picture1" alt="Third slide">
                    </div>
                </div>
            </div>
      </div>

       <div class="panel panel-info col-md-3" style="margin:4% auto;width:35%;">
            <div class="panel-body">
               {{ details.words }} 
            </div>
        </div>
        </div>

        <div class="panel panel-info" style="margin:4% auto;width:100%;">
            <div class="panel-body">
               <span style="font-size:16px;">分析:</span>{{ details.analysis }} 
            </div>
        </div>
        <button class="btn btn-success" v-on:click="collect">收藏</button>
    <router-view></router-view>
  </div>
</template>

<script>

import Naviga from './Naviga'
import qs     from 'qs'

export default {
  name: 'Details',

  data () {
    return {
      msg: 'De!',
    }
  },

  components:{
  "naviga" : Naviga
  },
  
  methods:{
    //用户收藏武将
    collect(){
      if(this.$store.state.user){
      this.$axios.post(this.apipath.path+"/Dispose/collect",qs.stringify({
        username: this.$store.state.user,
        collectid : this.details.id
      })).then(res=>{
        this.$store.state.collection = res.data.collection;
        console.log(this.$store.state.collection);
        alert(res.data.message);
  }).catch(err=>{console.log(err);});
      }else{alert("请先登录！");
      }
    }

  }
  ,

  computed:{
   details(){return   this.$store.state.detail;},
   picture1(){return  this.sgspicture.path + this.$store.state.detail.picture1;},
   picture2(){return  this.sgspicture.path + this.$store.state.detail.picture2;},
   picture3(){return   this.sgspicture.path + this.$store.state.detail.picture3;}

  },

  created(){
  // console.log(this.$store.state.user);
  this.$axios.post(this.apipath.path+"/Dispose/detail",
  qs.stringify({id:this.$route.params.detail})).then(res=>{
    this.$store.state.detailid = this.$route.params.detail;
    this.$store.state.detail = res.data.detail[0];
    console.log("gdsh",this.$store.state.detail);
  }).catch(err=>{console.log(err);});
  }
  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
