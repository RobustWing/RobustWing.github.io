<template>

  <div id="app">
    <NavHeader></NavHeader>
    <img src="./images/logo.png">
  </div>
</template>

<script>
  import 'common/css/reset.css';
  import Hello from 'components/Hello/Hello'
  import NavHeader from 'components/public/NavHeader.vue'

  export default {
    name: 'app',
    components: {
      Hello,NavHeader
    }
  }
</script>

<style>
</style>
