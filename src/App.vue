<template>
  <headerTopVue></headerTopVue>

</template>

<script>
import headerTopVue from './components/HeaderTop.vue';
export default {
  name: 'App',
  components: {
    headerTopVue
  },

  data(){
    return{
      siteTitle: "Moon Star Publicity",
      google: "<a href='https:www.google.com' target='_blank'>Google</a>",
      isDisabled: false,
    };
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
}
</style>
