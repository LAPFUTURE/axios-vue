<template>
  <div class="Carousel" style="margin: 2% auto;">
    <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="2500" 
    style="opacity:1;
    box-shadow: 0px 0px 30px black;">
       
        <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>   
       
        <div class="carousel-inner">
            <div class="item active">
              <router-link to="/Countries/yi">
                <img src="/static/img/zhuye2.jpg" alt="First slide">
              
              </router-link>
            </div>
            <div class="item">
              <router-link to="/Countries/feng">
                <img src="/static/img/xiaoqiao.jpg" alt="Second slide">
                
              </router-link>  
            </div>
            <div class="item">
              <router-link to="/Countries/luan">
                <img src="/static/img/caozhi.jpg" alt="Third slide">
                
              </router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Contents',
  data () {
    return {
      msg: 'Carousel!',
      
    }
  },

 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*.contents{*/
          /*--contents-position : absolute;*/
          /*--contents-left     : 35%;*/
          /*--contents-width    : 100%;*/
          /*--contents-height   : 250%;*/
          /*--contents-border   : 1px solid;*/
          /*--contents-top      : 100%;*/
/*}/
/*.contents{position  : var(--contents-position);
          left      : var(--contents-left);
          width     : var(--contents-width);
          height    : var(--contents-height);
          border    : var(--contents-border);
          top       : var(--contents-top); 
} 
*/

</style>
