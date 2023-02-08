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
                    <div class="col-lg-6 "> 
                        <div class="legal-pages f-right">
                            <ul>
                                <li><a href="#">privacy</a></li>
                                <li><a href="#">term &amp; conditions</a></li>
                                <li><a href="#">legal</a></li>
                                <li> 
                                    <span class="footer-social">                                    
                                        <a href="#">
                                            <font-awesome-icon icon="fa-brands fa-facebook-f" />
                                        </a>
                                        <a href="#">
                                            <font-awesome-icon icon="fa-brands fa-instagram" />
                                        </a>
                                        <a href="#">
                                            <font-awesome-icon icon="fa-brands fa-youtube" />
                                        </a>
                                    </span>
                                </li>
                            </ul>                 
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

<style scoped>
.legal-pages ul{
    display: flex;
    align-items: center;
}
.legal-pages ul li{
    margin-right: 30px;
    color: #fff;
}
.legal-pages ul li a{
    text-transform: capitalize;
}

.footer-social a{
    font-size: 14px;
    display: inline-block;
    margin-right: 10px;
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background-color: rgba(118, 194, 27, 0.4);
    text-align: center;
    line-height: 36px;
    color: rgb(255, 255, 255) !important;
}
.footer-social a:hover{background: rgba(118, 194, 27, 1); color: #fff !important;}
</style>
