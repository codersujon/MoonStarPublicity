<template>
  <nav class="navbar navbar-expand-lg">
  <div class="container">
    <a class="navbar-brand" href="index.html">
        <img src="../../assets/logo.png" alt="MoonStar Publicity">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name: 'MainHeader',
}
</script>

<style scoped>
.navbar{
  box-shadow: 0 5px 30px rgb(0 24 84/ 10%);
  padding: 0 !important;
}

.navbar-expand-lg .navbar-nav .nav-link {
  padding-right: var(--bs-navbar-nav-link-padding-x);
  padding-left: var(--bs-navbar-nav-link-padding-x);
  color: #F15922;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 14px;
  padding: 12px !important;
  transition: .3s ease-in;
  display: inline-block;
  position: relative;
}

.navbar-expand-lg .navbar-nav .nav-link::after{
  position: absolute;
  content: "";
  background: #F15922;
}


.navbar-expand-lg .navbar-nav .nav-link:hover{
  color:#2e3192;
}

.navbar-nav .nav-link.active, .navbar-nav .show > .nav-link {
  color:#2e3192 !important;
}

</style>