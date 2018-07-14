<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>

import qs from "qs"

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'welcome!',
      
    }
  },

  // created(){
  // this.$axios.get("/ThinkPHP5.0/public/index.php/admin/Dispose/testGet",
  //   {params:{}})
  //   .then(response =>{
  //     this.msg = response.data;
  //     console.log(response.data);})
  //    .catch(err =>{console.log(err);});

  //  var instance = this.$axios.create({
  //   headers: {'content-type': 'application/x-www-form-urlencoded'}});
  // instance.post(`/ThinkPHP5.0/public/index.php/admin/Dispose/testPost`,qs.stringify({name:"lap",psd:"123"})
  //  ).then(res => {console.log(res);});

  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
