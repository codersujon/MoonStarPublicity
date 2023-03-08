<template>
  <div class="home">
    <!-- Slider Start -->
    <Slider/>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <!-- Message From Chairman -->
                <MsgChairman/>
            </div>
          </div>
        </div>

        <!-- Work Process -->
        <!-- <WorkProcess/> -->
        
         <!-- Brand Area -->
        <BrandArea/>
  </div>
</template>

<script>
import Slider from '@/components/Slider.vue';
import WorkProcess from '@/components/WorkProcess.vue';
import BrandArea from '../components/BrandArea.vue'
import WyChooseUs from '@/components/WyChooseUs.vue';
import MsgChairman from '@/components/MsgChairman.vue';

  export default {
    name: 'Home',

    components:{
      BrandArea,
      MsgChairman,
      WyChooseUs,
      WorkProcess,
      Slider,
    }
  }

</script>

<style scoped>

</style>