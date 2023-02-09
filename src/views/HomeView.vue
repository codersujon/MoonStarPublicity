<template>
  <div class="about">
    <div class="container">
        <div class="row">
           <div class="col-12">
              <!-- Brand Area -->
              <BrandArea/>
           </div>
        </div>
    </div>
  </div>
</template>

<script>
import BrandArea from '../components/BrandArea.vue'
  export default {
    name: 'Home',

    components:{
      BrandArea
    }
  }
</script>

<style>

</style>