<template>
  <div id="app">
    <Waterfall></Waterfall>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import waterfall from '../../package/waterfall2'

export default {
  name: 'App',
  components: {
    // HelloWorld,
      Waterfall:waterfall.waterfall
  },
  mounted() {
    console.log(waterfall)
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
