<template>
    <footer class="moon_footer">
        <FooterTop/>
        <div class="secondary-bg">
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
    </footer>
</template>

<script>
import FooterTop from '../../components/FooterTop.vue';
export default {
    name: "MainFooter",
    data(){
        return{
            site_title: "Moon Star Publicity",
            year: "2022"
        }
    },
    components:{
        FooterTop,
    }
}
</script>

<style>

</style>
