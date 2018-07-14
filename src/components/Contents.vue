<template>
  <div class="contents" id="contents">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>

export default {
  name: 'Contents',
  data () {
    return {
      msg: 'Contents!',
      
    }
  },

 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contents{--contents-position : absolute;
          --contents-left     : 30%;
          --contents-width    : 40%;
          --contents-height   : 100%;
          --contents-border   : 1px solid;
}
.contents{position  : var(--contents-position);
          left      : var(--contents-left);
          width     : var(--contents-width);
          height    : var(--contents-height);
          border    : var(--contents-border);
} 
</style>
