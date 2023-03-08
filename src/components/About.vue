<template>
  <!-- ABOUT START -->
  <div class="about-area pt-80 pb-50" id="about">
			<div class="container">
				<div class="habout">
					<div class="row">
						<div class="col-xl-6 col-lg-6 col-md-12">
							<div class="habout__content  mb-30">
								<h3 class="animate__animated animate__fadeInUp animate__delay-.5s">Company at a glance</h3>
								<p class="animate__animated animate__fadeInUp animate__delay-.8s">Moon Star Publicity starts journey in the real estate business in 2010 with a view to providing esthetic apartments for the contemporary city lifestyle. For more than 12 years, we have grown ourselves as a developer for providing functional apartments to our deserving clients.</p>
								<p>Inspired by the unique architectural thought our apartments arranged in a truly unique cascade of nature for luxury living.</p>
								<div class="row animate__animated animate__fadeInUp animate__delay-1s">
									<div class="col-xl-6 col-lg-6 col-md-6">
										<ul>
											<li><font-awesome-icon icon="fa-solid fa-thumbs-up"/> Awesome Design</li>
											<li><font-awesome-icon icon="fa-solid fa-thumbs-up"/> Better Client Service</li>
											<li><font-awesome-icon icon="fa-solid fa-thumbs-up"/> Creative Design</li>
											<li><font-awesome-icon icon="fa-solid fa-thumbs-up"/> Digital Marketing & Branding</li>
										</ul>
									</div>
									<div class="col-xl-6 col-lg-6 col-md-6">
										<ul>
											<li> <font-awesome-icon icon="fa-solid fa-thumbs-up"/> Awesome Design</li>
											<li> <font-awesome-icon icon="fa-solid fa-thumbs-up"/> Better Client Service</li>
											<li> <font-awesome-icon icon="fa-solid fa-thumbs-up"/> Creative Design</li>
											<li> <font-awesome-icon icon="fa-solid fa-thumbs-up"/> Digital Marketing & Branding</li>
										</ul>
									</div>
								</div>
								<div class="habout__content-btn">
									<a href="" class="h-btn a-btn">Read More</a>
								</div>
							</div>
						</div>
						<div class="col-xl-6 col-lg-6 col-md-12">
							<div class="habout__img mb-30 animate__animated animate__fadeInUp animate__delay-1s">
								<img src="../assets/images/about/about.jpg" alt="" class="img-fluid rounded img-thumbnail">
							</div>
						</div>
					</div>
				</div>
				<div class="ability mt-80">
					<div class="row">
						<div class="col-sm-6 col-md-4">
							<div class="ability__single animate__animated animate__slideInLeft animate__delay-1.5s mb-30">
								<h4>Mission</h4>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sit repellendus eum quis! Quidem, iure!</p>
								<div class="ability__single-btn">
									<a href="">Read More <font-awesome-icon icon="fa-solid fa-arrow-right" /></a>
								</div>
							</div>
						</div>
						<div class="col-sm-6 col-md-4">
							<div class="ability__single animate__animated animate__slideInUp animate__delay-1.8s mb-30">
								<h4>Vision</h4>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sit repellendus eum quis! Quidem, iure!</p>
								<div class="ability__single-btn">
									<a href="">Read More <font-awesome-icon icon="fa-solid fa-arrow-right" /></a>
								</div>
							</div>
						</div>
						<div class="col-sm-6 col-md-4">
							<div class="ability__single animate__animated animate__slideInRight animate__delay-2s mb-30">
								<h4>History</h4>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sit repellendus eum quis! Quidem, iure!</p>
								<div class="ability__single-btn">
									<a href="">Read More <font-awesome-icon icon="fa-solid fa-arrow-right" /></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
  </div>
  <!-- ABOUT END -->
</template>

<script>
    export default {
		name: 'About',
    }
    
</script>

<style scoped>
/*-- About Start --*/
.about-area .habout__content h3,
.about-area .habout__content ul {
  margin-bottom: 25px;
}
.about-area .habout__content h3 li,
.about-area .habout__content ul li {
  line-height: 2;
}
.about-area .habout__img {
  position: relative;
}

.about-area .ability__single-btn a {
  color: var(--moon-secondary);
}
.about-area .ability__single-btn a i {
  margin-left: 5px;
}
</style>