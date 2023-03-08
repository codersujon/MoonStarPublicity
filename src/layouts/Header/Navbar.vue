<template>
    <nav class="navbar navbar-expand-lg sticky">
      <div class="container">
          <!-- Navbar Brand Logo -->
          <LogoVue/>
          <!-- Navbar Toggle Icon -->
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <!-- Nav Links -->
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <router-link to="/" :class="nav">Home</router-link>
              <!-- <router-link to="/about" :class="nav">About</router-link> -->
              <router-link to="/portfolio" :class="nav">Portfolio</router-link>
              <router-link to="/services" :class="nav">Services</router-link>
              <router-link to="/clients" :class="nav">Clients</router-link>
              <router-link to="/contact" :class="nav">Contact</router-link>
            </ul>
          </div>
      </div>
    </nav>
</template>
<script>
import LogoVue from './Logo.vue'
export default {
    name: 'Navbar',
    components:{
        LogoVue,
    },
    data(){
      return{
        nav: 'nav-link',
      }
    }
}
</script>

<style scoped="css">
.navbar{
  box-shadow: 0 5px 30px rgb(0 24 84/ 10%);
  padding: 0 !important;
}

.navbar-expand-lg .navbar-nav .nav-link {
  color: var(--moon-secondary);
  font-weight: 600;
  text-transform: uppercase;
  font-size: 14px;
  margin: 8px 0 !important;
  transition: .3s;
  display: inline-block;
  position: relative;
  margin-left: 20px !important;
}


.navbar-expand-lg .navbar-nav .nav-link::after{
  position: absolute;
  content: "";
  background-color: var(--moon-primary);
  height: 2px;
  width: 0%;
  left: 0;
  right: 0;
  bottom: 2px;
  transition: all .3s ease-in-out;
  visibility: hidden;
}

.navbar-expand-lg .navbar-nav .nav-link.active::after {
    width: 100%;
    visibility: visible;
}

.navbar-expand-lg .navbar-nav .nav-link:hover::after {
    width: 100%;
    visibility: visible;
}

.navbar-expand-lg .navbar-nav .nav-link:hover{
  color: var(--moon-primary);
}

.navbar-nav .nav-link.active, .navbar-nav .show > .nav-link {
  color: var(--moon-secondary) !important;
}

.navbar-toggler {
  color: var(--white);
  background-color: transparent;
  border-radius: 0;
}

</style>