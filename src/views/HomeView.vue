<template>
  <div class="home">
    <!-- Slider Start -->
    <Slider/>
    <!-- Our Company -->
    <AboutVue/>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <!-- Message From Chairman -->
                <MsgChairman/>
            </div>
          </div>
        </div>

         <!-- Brand Area -->
        <BrandArea/>
  </div>
</template>

<script>
import Slider from '@/components/Slider.vue';
import AboutVue from '@/components/About.vue';
import MsgChairman from '@/components/MsgChairman.vue';
import BrandArea from '../components/BrandArea.vue'

  export default {
    name: 'Home',

    components:{
      BrandArea,
      Slider,
      AboutVue,
      MsgChairman,
    }
  }

</script>

<style scoped>

</style>