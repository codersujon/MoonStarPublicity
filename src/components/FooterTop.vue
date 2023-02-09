<template>
    <div class="FooterTop black-bg pt-110 pb-60">
        <div class="container">
            <div class="row d-flex justify-content-between">
                <div class="col-xl-3">
                    <div class="footer-widget mb-30">
                    <div class="f-widget-title mb-45">
                        <a href="index.html">
                        <img src="../assets/logo.png" alt="logo">
                        </a>
                    </div>
                    <div class="footer-link"> 
                        <p>{{ what_we }}</p>
                    </div>
                    <div class="f-contact mt-30">
                        <ul>
                        <li>
                            <font-awesome-icon icon="fa-solid fa-location-dot" />
                            <span>1247/Plot No. 39, 15th Phase, Colony, Dhaka</span>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div class="col-xl-3">
                    <div class="footer-widget mb-30">
                    <div class="f-widget-title">
                        <h2>Our Links</h2>
                    </div>
                    <div class="footer-link">
                        <ul>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>
                            <a href="about.html"> About Us</a>
                        </li>
                        <li>
                            <a href="services.html"> Services </a>
                        </li>
                        <li>
                            <a href="blog.html">Blog </a>
                        </li>
                        <li>
                            <a href="#">Support</a>
                        </li>
                        <li>
                            <a href="contact.html"> Contact Us</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div class="col-xl-3">
                    <div class="footer-widget mb-30">
                    <div class="f-widget-title">
                        <h2>Get In Touch</h2>
                    </div>
                    <div class="f-contact">
                        <ul>
                        <li>
                            <font-awesome-icon icon="fa-solid fa-phone" />
                            <span>+880 1715-042128 <br>+880 1715-042128 </span>
                        </li>
                        <li>
                            <font-awesome-icon icon="fa-solid fa-envelope" />
                            <span>
                            <a href="mailto:info@example.com">moonstar.amr@gmail.com</a>
                            <br>
                            <a href="mailto:help@example.com">info@moonstarpublicity.com</a>
                            </span>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div class="col-xl-3">
                    <div class="footer-widget mb-30">
                    <div class="f-widget-title">
                        <h2>Our Gallery</h2>
                    </div>
                    <div class="f-insta">
                        <ul>
                        <li>
                            <a href="../assets/images/footer/f-galler-01.png" class="popup-image">
                                <img src="../assets/images/footer/f-galler-01.png" alt="img">
                            </a>
                        </li>
                        <li>
                            <a href="../assets/images/footer/f-galler-02.png" class="popup-image">
                            <img src="../assets/images/footer/f-galler-02.png" alt="img">
                            </a>
                        </li>
                        <li>
                            <a href="../assets/images/footer/f-galler-03.png" class="popup-image">
                            <img src="../assets/images/footer/f-galler-03.png" alt="img">
                            </a>
                        </li>
                        <li>
                            <a href="../assets/images/footer/f-galler-04.png" class="popup-image">
                            <img src="../assets/images/footer/f-galler-04.png" alt="img">
                            </a>
                        </li>
                        </ul>
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
.FooterTop{
    color: #ffffffb3;
}
.f-widget-title h2 {
	font-size: 24px;
    margin-bottom: 30px;
    position: relative;
    padding-bottom: 30px;
    color: #fff;
    font-weight: 500;
}
.f-widget-title h2::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 15px;
    height: 1px;
    width: 80px;
    background: var(--moon-secondary);
}
.f-contact svg {
    width: 30px;
    height: 30px;
    line-height: 30px;
    color: #fff !important;
    text-align: center;
    border-radius: 50%;
    float: left;
    margin-right: 20px;
}
.f-contact span{
    color:#ffffffb3;
    display: block;
}

.f-contact {
    display: flex;
}
.f-contact ul{
    width: 100%;
}
.f-contact ul li{
    margin-bottom: 30px;
}
.f-contact a{
    color:#ffffffb3 !important;
}
.f-contact a:hover{
    color: #76c21b!important;
}
.f-contact .icon{
    margin-right: 20px;
}
.f-contact span{
    color:#ffffffb3;
    display: block;
}
.f-contact h3 {
    color: #fff;
    font-size: 24px;
}
.footer-link {
    display: inline-block;
}
.footer-link ul li {
	margin-bottom: 15px;
    float: left;
    width: 50%;
}

.footer-link ul li a {
	color:#ffffffb3;
    display: block;
}
.footer-link ul li a:hover{padding-left: 7px;color: #9dd53a;}
.footer-link ul li i {
    color: #76c21b;
    margin-right: 5px;
}
.footer-link ul li:last-child{margin-bottom: 0;}

.footer-widget,
.footer-widget .widget ul li{
	text-align:left;
	color: #ffffffb3;
}

.footer-widget, 
.tag-cloud-link ,
.footer-widget p{
    color: #ffffffb3;
}

.f-insta ul li {
    display: inline-block;
    margin-bottom: 15px;
    margin-right: 9px;
    width: 47.5% !important;
}
.f-insta ul li:nth-child(2), .f-insta ul li:nth-child(4) {
    margin-right: 0 !important;
}
.f-insta ul li img {
    width: 100%;
}
.f-insta ul li a{display: block;position: relative;}
.f-insta ul li a::before {
	content: "\e035";
	font-family: "dripicons-v2" !important;
	position: absolute;
	top: 40%;
	left: 50%;
	transform: translate(-50%,-50%);
	font-size: 24px;
	color: #76c21b;
	transition: .3s;
	opacity: 0;
	z-index: 9;
}
.f-insta ul li a::after {
	content: "";
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	width: 100%;
	background: #76c21b;
	opacity: 0;
	transition: .3s;
}
.f-insta ul li:hover a::before{top: 50%;opacity: 1;}
.f-insta ul li:hover a::after{opacity: .6;}
.copyright-wrap {
    background: #01233f;
    padding: 10px 0;
    color: #fff;
    font-size: 15px;
}
</style>