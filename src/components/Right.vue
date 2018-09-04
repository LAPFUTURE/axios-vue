<template>
  <div class="right">
    <div>
      <img src="/static/img/cp.png" style="box-shadow: 0px 0px 25px #90683b;">
    <div class="content">
    <div class="box box-mission" style="box-shadow: 0px 0px 25px #90683b;margin:10% auto;">
      <span class="icon"></span>
      <router-link to="/RegandLog/register">
        <button class="button" style="background-color: rgba(200,190,200,0.5);width: 180px;height: 49px;padding-right: 50px; "> 起势
              <span class="line line-top"></span>
              <span class="line line-right"></span>
              <span class="line line-bottom"></span>
              <span class="line line-left"></span>
          </button>
        </router-link>
    </div>

   <div class="box box-mission" style="box-shadow: 0px 0px 25px #90683b;margin:10% auto;">
      <span class="icon"></span>
      <router-link to="/RegandLog/login">
        <button class="button" style="background-color: rgba(200,190,200,0.5);width: 180px;height: 49px;padding-right: 50px; ">州牧
              <span class="line line-top"></span>
              <span class="line line-right"></span>
              <span class="line line-bottom"></span>
              <span class="line line-left"></span>
          </button>
      </router-link>
    </div>

    <div class="box box-mission" style="box-shadow: 0px 0px 25px #90683b;margin:10% auto;">
      <span class="icon"></span>
      <router-link to="/RegandLog/usercenter">
        <button class="button" style="background-color: rgba(200,190,200,0.5);width: 180px;height: 49px;padding-right: 50px; ">
              <span class="line line-top"></span>
              <span class="line line-right"></span>
              <span class="line line-bottom"></span>
              <span class="line line-left"></span>
            烽火
        </button>
      </router-link>
    </div>

  </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Right',
  data () {
    return {
      msg: 'Right-content!',
      
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.right{
       --right-position : absolute;
       --right-right    : 20%;
       --right-width    : 15%;
       --right-height   : 165%;
       --right-top      : 100%;
       --right-border   : 1px solid;
}
.right{position : var(--right-position);
       right    : var(--right-right);
       width    : var(--right-width);
       height   : var(--right-height);
       border   : var(--right-border);
       top      : var(--right-top);
} 


/*外部容器*/
.content{
  position: absolute;
  /*width:25%px;
  height:800px;*/
  right: 20%;
  /*top: 5%;*/
  display: flex;
  flex-direction: column;
}

/*子容器*/
.content .box{
  width:100%;
  height:50%;
  /*margin: 0 auto;*/
  float:left;
  /*margin:  auto;*/

}



.box .button{
  width: 156px;
  height: 45px;
  display: block;
  line-height:45px;
  margin: 0 auto;
  background:  url(/static/img/tag5.png) no-repeat 105px center;
  background-size: 30% 60%;
  
  font-family: "微软雅黑";
  font-size: 18px;
  font-weight: bolder;
  color: black;
  text-decoration: none;
  padding-left:20px; 
  border: 2px solid rgba(255,255,255,0.5);
  transition: all 0.2s ease;
  position: relative;
}

.box .button:hover{
  background-position: 115px center;
  border: 2px solid rgba(255,255,255,1);
}

.box .line{
    background-color: #90683b; 

}

/*左边过来的线条*/
.box .line-top{
  width: 0px;
  height: 2px;
  display: block;
  position: absolute;
  top: -2px;
  left: -100px;
   transition: all 0.1s;
}

.box .button:hover .line-top{
   width: 180px;
   left: -2px;
}

/*右边过来的线条*/
.box .line-bottom{
  width: 0px;
  height: 2px;
  display: block;
  position: absolute;
  bottom: -2px;
  right: -100px;
  transition: all 0.1s;
}

.box .button:hover .line-bottom{
  width:180px;
  right: -2px;
}

/*从下边过来的*/
.box .line-right{
  width: 2px;
  height: 0px;
  display: block;
  position: absolute;
  bottom: -100px;
  left: -2px;
  transition: all 0.1s;
}

.box .button:hover .line-right{
   bottom: -2px; 
   height:49px;
}

/*从上边过来的*/
.box .line-left{
  width: 2px;
  height: 0px;
  display: block;
  position: absolute;
  top: -100px;
  right: -2px;
  transition: all 0.1s;
}

.box .button:hover .line-left{
   top: -2px; 
   height:49px;
}


</style>
