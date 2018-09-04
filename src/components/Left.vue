<template>
  <div class="left">
    <img src="/static/img/cc.png" style="box-shadow: 0px 0px 25px #90683b;">
      <div v-for = "comment in this.$store.state.comment">
        <p>
          {{ comment.othername}} : {{ comment.comment}}
        </p>
      </div>
    </route-view>
  </div>
</template>

<script>

export default {
  name: 'Left',
  data () {
    return {
      msg: 'Left-content!',
      
    }
  },

 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left{--left-position: absolute;
      --left-left    : 20%;
      --left-width   : 15%;
      --left-height  : 150%;
      --left-top     : 100%;
      --left-border  : 1px solid;
}
.left{position: var(--left-position);
      left    : var(--left-left);
      width   : var(--left-width);
      height  : var(--left-height);
      top     : var(--left-top);
      border  : var(--left-border);
}
</style>
