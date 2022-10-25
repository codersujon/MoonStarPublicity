<template>
  <div>
     <HeaderTop></HeaderTop>
     <Header></Header>
     <FooterTop></FooterTop>
     <Footer></Footer>
  </div>
</template>

<script>
import HeaderTop from './components/HeaderTop.vue'
import Header from './layouts/Header/Header.vue'
import Footer from './layouts/Footer/Footer.vue'
import FooterTop from './components/FooterTop.vue'

export default {
  name: 'App',
  components: {
    HeaderTop,
    Header,
    FooterTop,
    Footer,
  },

}
</script>

<style>

</style>
