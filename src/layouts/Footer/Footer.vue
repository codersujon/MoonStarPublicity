<template>
    <footer class="moon_footer">
        <FooterTop/>

        <div class="black-lightbg">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xl-6">
                        <div class="copyright pt-10 pb-10">
                            <p class="m-0 text-white">Copyright &copy; {{ year }} <a href="http://www.moonstarpublicity.com/" class="secondary-color fw-bold" target="_blank"> {{ site_title }} </a>. All Rights Reserved.</p>  
                        </div>
                    </div>
                    <div class="col-lg-6 text-right text-xl-right">                       
                        <ul>
                            <li><a href="#">Privercy</a></li>
                            <li><a href="#">Term &amp; Conditions</a></li>
                            <li><a href="#">Legal</a></li>
                            <li> <span class="footer-social">                                    
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                            </span></li>
                        </ul>                 
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
        let date = new Date();
        let yearF = date.getFullYear();

        return{
            site_title: "Moon Star Publicity",
            year: yearF
        }
    },
    components:{
        FooterTop,
    }
}
</script>

<style>

</style>
