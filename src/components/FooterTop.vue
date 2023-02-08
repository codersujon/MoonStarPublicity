<template>
    <div class="FooterTop black-bg pt-110 pb-60">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-lg-4">
                    <div class="footer__widget mb-50">
                        <a href="index.html">
                            <img src="../assets/logo.png" alt="logo">
                        </a>
                        <p class="mt-15 mb-25" v-text="what_we"></p>
                        <div class="footer__widget__socials">
                            <a href="#">
                                <font-awesome-icon icon="fa-brands fa-facebook-f" /></a>
                            <a href="#">
                                <font-awesome-icon icon="fa-brands fa-twitter" /></a>
                            <a href="#">
                                <font-awesome-icon icon="fa-brands fa-instagram" /></a>
                            <a href="#">
                                <font-awesome-icon icon="fa-brands fa-youtube" /></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="footer__widget mb-50">
                        <div class="footer__title">
                            <h4 class="secondary-color">quick links</h4>
                        </div>
                        <div class="footer__links">
                            <a href="#" class="d-block">About Us</a>
                            <a href="#" class="d-block">Contact</a>
                            <a href="#" class="d-block">Marketing</a>
                            <a href="#" class="d-block">Product Design</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="footer__widget mb-50">
                        <div class="footer__title">
                            <h4 class="secondary-color">get in touch</h4>
                        </div>
                        <div class="footer__address">
                            <p>Mahtab Soap Factory Road, Shubhadya, <br> Purbo Para, South Keranigonj, Dhaka-1310.</p>
                        </div> 

                        <div class="footer__email mb-20">
                            <li>moonstar.amr@gmail.com</li>
                            <li>info@moonstarpublicity.com</li>
                        </div>
                        <div class="footer__phone d-flex align-items-center">
                            <div class="icon mr-10">
                                <font-awesome-icon icon="fa-solid fa-phone" />
                            </div>
                            <div class="text">
                                <a href="tel:+8801970 366 446"> +880 1715-042128</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FooterTop",
        data() {
            return {
                what_we: "Sounds good to you? We are always looking for digital makers and unique personalities.",
            }
        }
    }
</script>

<style scoped>
.footer__widget__socials>a {
    display: inline-block;
    width: 45px;
    height: 45px;
    line-height: 45px;
    border-radius: 3px;
    font-size: 16px;
    color: var(--white);
    background: var(--moon-secondary);
    transition: all 500ms ease;
    text-align: center;
    margin-right: 10px;
}

.footer__widget__socials a:hover {
    color: var(--white);
    background-color: var(--moon-primary);
}

.footer__links a {
    line-height: 2.7;
    transition: .3s;
}

.footer__links a:hover {
    color: var(--moon-secondary);
    font-weight: 600;
}

.footer__email li {
    color: #5e616a;
    font-size: 17px;
    line-height: 2;
}

.footer__phone .icon {
    background: var(--moon-secondary);
    color: var(--white);
    width: 45px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 25px;
    border-radius: 3px;
}

.footer__phone .text a{
    font-size: 22px;
}
</style>