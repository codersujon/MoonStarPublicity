<template>
    <div class="brand-area  pt-80 pb-80 text-center grey-bg">
        <div class="container">
            <!-- <div class="row">
                <div class="section-title text-center mb-80">
                    <h2>Our Happy Client</h2>
                </div>
            </div> -->
            <div class="row justify-content-center align-items-center">
                <div class="col-xl-2">
                        <div class="single-brand mb-30">
                           <a href="#" class="brand-1"></a>
                        </div>
                    </div>
                    <div class="col-xl-2">
                        <div class="single-brand mb-30">
                            <a href="#" class="brand-2"></a>
                        </div>
                    </div>
                    <div class="col-xl-2">
                        <div class="single-brand mb-30">
                            <a href="#" class="brand-3"></a>
                        </div>
                    </div>
                    <div class="col-xl-2">
                        <div class="single-brand mb-30">
                            <a href="#" class="brand-4"></a>
                        </div>
                    </div>
                    <div class="col-xl-2">
                        <div class="single-brand mb-30">
                            <a href="#" class="brand-5"></a>
                        </div>
                    </div>
                    <div class="col-xl-2">
                        <div class="single-brand mb-30">
                            <a href="#" class="brand-6"></a>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BrandArea",
        data() {
            return {
            }
        },
    }
</script>



<style scoped>

.single-brand a{
    display: block;
    width: 285px;
    height: 60px;
}
.single-brand a.brand-1{
    background: url(../assets/images/brand/b-logo1-grey.png) no-repeat;
}
.single-brand a.brand-2{
    background: url(../assets/images/brand/b-logo2-grey.png) no-repeat;
}
.single-brand a.brand-3{
    background: url(../assets/images/brand/b-logo3-grey.png) no-repeat;
}
.single-brand a.brand-4{
    background: url(../assets/images/brand/b-logo4-grey.png) no-repeat;
}
.single-brand a.brand-5{
    background: url(../assets/images/brand/b-logo5-grey.png) no-repeat;
}
.single-brand a.brand-6{
    background: url(../assets/images/brand/b-logo6-grey.png) no-repeat;
}
.single-brand a.brand-1:hover{
    transition: .3s ease-in-out;
    background: url(../assets/images/brand/b-logo1-g.png) no-repeat;
}
.single-brand a.brand-2:hover{
    transition: .3s ease-in-out;
    background: url(../assets/images/brand/b-logo2-g.png) no-repeat;
}
.single-brand a.brand-3:hover{
    transition: .3s ease-in-out;
    background: url(../assets/images/brand/b-logo3-g.png) no-repeat;
}
.single-brand a.brand-4:hover{
    transition: .3s ease-in-out;
    background: url(../assets/images/brand/b-logo4-g.png) no-repeat;
}
.single-brand a.brand-5:hover{
    transition: .3s ease-in-out;
    background: url(../assets/images/brand/b-logo5-g.png) no-repeat;
}
.single-brand a.brand-6:hover{
    transition: .3s ease-in-out;
    background: url(../assets/images/brand/b-logo6-g.png) no-repeat;
}
</style>