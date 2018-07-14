<template>
  <div class="left">
    <h1>{{ msg }}</h1>
   
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
      --left-left    : 5%;
      --left-width   : 20%;
      --left-height  : 100%;
      --left-border  : 1px solid;
}
.left{position: var(--left-position);
      left    : var(--left-left);
      width   : var(--left-width);
      height  : var(--left-height);
      border  : var(--left-border);
}
</style>
