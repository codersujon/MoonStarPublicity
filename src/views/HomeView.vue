<template>
  <div class="home">
     <!-- Work Process -->
     <WorkProcess/>

        <div class="container">
          <div class="row">
            <div class="col-12">
              <!-- Why Choose Us -->
                <WyChooseUs/>
            </div>
          </div>
        </div>
        
         <!-- Brand Area -->
        <BrandArea/>
  </div>
</template>

<script>
import WorkProcess from '@/components/WorkProcess.vue';
import BrandArea from '../components/BrandArea.vue'
import WyChooseUs from '@/components/WyChooseUs.vue';

  export default {
    name: 'Home',

    components:{
      BrandArea,
      WyChooseUs,
      WorkProcess
    }
  }

</script>

<style>

</style>