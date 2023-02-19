<template>
  <div class="Portfolio">
    
      <div class="container">
          <div class="row">
            <div class="col-12">
                <PortfolioArea/>
            </div>
          </div>
      </div>

     <!-- Brand Area -->
     <BrandArea/>
  </div>
</template>

<script>
import PortfolioArea from '@/components/PortfolioArea.vue';
import BrandArea from '@/components/BrandArea.vue';
export default {
  name: 'Portfolio',
  components:{
    PortfolioArea,
    BrandArea
  }
}
</script>

<style>

</style>