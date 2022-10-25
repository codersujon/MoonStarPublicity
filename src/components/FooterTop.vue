<template>
    <div class="FooterTop pt-120 pb-90">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div class="footer__widget mb-30">
                        <a href="index.html">
                            <img src="../assets/logo.png" alt="logo">
                        </a>
                        <p class="mt-15 mb-25">Sounds good to you? We are always looking for digital makers and unique personalities.</p>
                        <div class="footer__widget__socials">
                            <a href="#"><font-awesome-icon icon="fa-brands fa-facebook-f" /></a>
                            <a href="#"><font-awesome-icon icon="fa-brands fa-twitter" /></a>
                            <a href="#"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
                            <a href="#"><font-awesome-icon icon="fa-brands fa-youtube" /></a>
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
    data(){
        return{

        }
    }
}
</script>

<style>
.footer__widget__socials a{
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

.footer__widget__socials a:hover{
    color: var(--moon-primary);
    background-color: var(--moon-primary), .8;
}
</style>