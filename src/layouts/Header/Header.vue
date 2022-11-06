<template>
    <header class="moon_header">
        <HeaderTop/>
        <NavbarVue/>
    </header>
</template>

<script>
import HeaderTop from '../../components/HeaderTop.vue';
import NavbarVue from './Navbar.vue';
export default {
    name: 'Header',

    components:{
       HeaderTop,
       NavbarVue,
       
    }
}
</script>

<style>

</style>