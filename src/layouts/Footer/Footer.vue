<template>
    <div class="footer secondary-bg">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="copyright text-center pt-10 pb-10">
                        <p class="m-0 text-white">Copyright &copy; {{ year }}  <a href="www.moonstarpublicity.com" class="primary-color fw-bold"> {{ site_title }} </a>. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
</template>

<script>
export default {
    name: "MainFooter",
    data(){
        return{
            site_title: "Moon Star Publicity",
            year: "2022"
        }
    }
}
</script>

<style>

</style>
