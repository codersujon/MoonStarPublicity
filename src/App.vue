<template>
  <div>
     <HeaderTop></HeaderTop>
     <MainHeader></MainHeader>
     <FooterTop></FooterTop>
     <Footer></Footer>
  </div>
</template>

<script>
import HeaderTop from './components/HeaderTop.vue'
import MainHeader from './layouts/Header/MainHeader.vue'
import Footer from './layouts/Footer/Footer.vue'
import FooterTop from './components/FooterTop.vue'



export default {
  name: 'App',
  components: {
    HeaderTop,
    MainHeader,
    FooterTop,
    Footer,
  },

}
</script>

<style>

</style>
