<template>
    <div>
      <HeaderVue/>
        <main>
            <router-view></router-view>
        </main>
      <FooterVue/>
    </div>
</template>

<script>
import HeaderVue from './layouts/Header/Header.vue';
import FooterVue from './layouts/Footer/Footer.vue';



export default {
  name: 'App',
  components: {
      HeaderVue,
      FooterVue,
  },

}
</script>

<style>

</style>
