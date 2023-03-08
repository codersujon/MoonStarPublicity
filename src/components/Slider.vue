<template>
    <!-- SLIDER START -->
		<div class="slider-area animate__animated animate__slideInUp">
			<div class="single-slide d-flex align-items-center pt-80 pb-80">
				<div class="container">
					<div class="row">
						<div class="col-xl-12">
							<div class="hslide text-center">
								<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
								<div class="carousel-inner animate__animated animate__zoomIn">
										<div class="carousel-item active">
											<img src="../assets/images/slider/home.png" alt="MoonstartHome" class="img-fluid">
										</div>
										<div class="carousel-item">
											<img src="../assets/images/slider/home.png" alt="MoonstartHome" class="img-fluid">
										</div>
										<div class="carousel-item">
											<img src="../assets/images/slider/home.png" alt="MoonstartHome" class="img-fluid">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- SLIDER END -->
</template>

<script>
    export default {
        name: 'Slider',
    }
    
</script>

<style scoped>
.single-slide{
    background-image: url("../assets/images/slider/home-bg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
	min-height: 100vh;
}

</style>