<template>
    <!-- Header Top Start -->
    <div class="headerTop pt-15 pb-15 secondary-bg text-white d-none d-lg-block">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                    <span>
                        <font-awesome-icon icon="fa-solid fa-envelope" />
                        {{ email }}
                    </span>
                </div>
                <div class="col-12 col-md-6 col-lg-3 col-xl-3">
                    <span>
                        <font-awesome-icon icon="fa-solid fa-location-dot primary-color" />
                        {{ address }}
                    </span>
                </div>
                <div class="col-12 col-lg-5 col-xl-6">
                    <div class="socialMedia d-flex justify-content-center justify-content-lg-end">
                        <span class="text-capitalize">follow on social</span>
                        <ul class="ml-20 list-inline">
                            <li class="list-inline-item ml-10 mr-10">
                                <a href="#">
                                    <font-awesome-icon icon="fa-brands fa-facebook-f" />
                                </a>
                            </li>
                            <li class="list-inline-item ml-10 mr-10">
                                <a href="#">
                                    <font-awesome-icon icon="fa-brands fa-twitter" />
                                </a>
                            </li>
                            <li class="list-inline-item ml-10 mr-10">
                                <a href="#">
                                    <font-awesome-icon icon="fa-brands fa-instagram" />
                                </a>
                            </li>
                            <li class="list-inline-item ml-10 mr-10">
                                <a href="#">
                                    <font-awesome-icon icon="fa-brands fa-youtube" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'HeaderTop',
    data(){
        return{
            email: "moonstarpublicity@gmail.com",
            address: "201 citycon Rd, CA 08214",
        }
    }
}
</script>

<style scoped>
.socialMedia a:hover{
    color: #fa6c38;
}

</style>
