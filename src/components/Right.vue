<template>
  <div class="right">
    <h1>{{ msg }}</h1>
    
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
.right{--right-position : absolute;
       --right-right    : 5%;
       --right-width    : 20%;
       --right-height   : 100%;
       --right-border   : 1px solid;
}
.right{position : var(--right-position);
       right    : var(--right-right);
       width    : var(--right-width);
       height   : var(--right-height);
       border   : var(--right-border);
} 
</style>
