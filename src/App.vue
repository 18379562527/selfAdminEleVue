<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    beforeCreate(){
      this.$http.setInstantiateVue(this)
    }
  }
</script>

<style>
  body{
    padding:0;
    margin:0;
  }
</style>
