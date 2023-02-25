<template>
  <div class="clients">
    <!-- breadCrumb -->
    <!-- <BreadCrumb/> -->
    <div class="container">
        <div class="row">
           <div class="col-12">
             <h1>Clients</h1>
           </div>
        </div>
    </div>
    <!-- Brand Area -->
    <BrandArea/>
  </div>
</template>

<script>
import BreadCrumb from '@/layouts/Breadcrumb/BreadCrumb.vue';
import AboutVue from '@/components/About.vue';
import BrandArea from '../components/BrandArea.vue'

  export default {
      name: 'About',

      components:{
        BrandArea,
        AboutVue,
        BreadCrumb
      }
  }

</script>

<style scoped>

</style>