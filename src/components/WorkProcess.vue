<template>
  <!-- WORK PROCESS START -->
    <div class="process-area pt-60 pb-30" data-background="../assets/images/process-back.jpg" data-overlay="dark"
                data-opacity="8">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title-white text-center mb-50">
                        <span>Organized & Properly</span>
                        <h2>our work process</h2>
                        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptatibus?</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-3 col-lg-3 col-md-6">
                    <div class="single-process mb-30">
                        <h3>Design <span>1</span></h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br> Tenetur, explicabo.</p>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-6">
                    <div class="single-process mb-30">
                        <h3>Development <span>2</span></h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br> Tenetur, explicabo.</p>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-6">
                    <div class="single-process mb-30">
                        <h3>Testing <span>3</span></h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br> Tenetur, explicabo.</p>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-6">
                    <div class="single-process mb-30">
                        <h3>Final <span>1</span></h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br> Tenetur, explicabo.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  <!-- WORK PROCESS END -->
</template>

<script>

    export default {
        name: 'WorkProcess',

    }

    

</script>

<style scoped>
.process-area{
    background-image: url("../assets/images/process-back.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    z-index: 1;
}
.single-process h3,
.single-process p {
  color: var(--white);
}
.single-process h3 {
  font-size: 22px;
  background: var(--moon-secondary);
  padding: 10px;
  border-radius: 5px;
  font-weight: 500;
  margin-bottom: 25px;
  position: relative;
}
.single-process h3 span {
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px 20px;
  background-color: var(--moon-primary);
  border-radius: 5px;
}
.single-process p {
  text-align: center;
}
</style>