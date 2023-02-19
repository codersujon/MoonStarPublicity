<template>
  <!-- ABOUT START -->
  <div class="about-area pt-80 pb-50" id="about">
			<div class="container">
				<div class="habout">
					<div class="row">
						<div class="col-xl-6 col-lg-6 col-md-12">
							<div class="habout__content mb-30">
								<h3>Welcome to Our Company</h3>
								<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias excepturi fugit iusto
									nostrum delectus. Perferendis molestiae asperiores labore consectetur. Voluptatibus
									debitis odit aliquam non voluptatum possimus repellat atque laudantium asperiores
									minima adipisci quod, soluta ab commodi, quas eaque aperiam provident?</p>
								<div class="row">
									<div class="col-xl-6 col-lg-6 col-md-6">
										<ul>
											<li><i class="far fa-thumbs-up"></i> Awesome Design</li>
											<li><i class="far fa-thumbs-up"></i> Better Client Service</li>
											<li><i class="far fa-thumbs-up"></i> Creative Design</li>
											<li><i class="far fa-thumbs-up"></i> Digital Marketing & Branding</li>
										</ul>
									</div>
									<div class="col-xl-6 col-lg-6 col-md-6">
										<ul>
											<li><i class="far fa-thumbs-up"></i> Awesome Design</li>
											<li><i class="far fa-thumbs-up"></i> Better Client Service</li>
											<li><i class="far fa-thumbs-up"></i> Creative Design</li>
											<li><i class="far fa-thumbs-up"></i> Digital Marketing & Branding</li>
										</ul>
									</div>
								</div>
								<div class="habout__content-btn">
									<a href="" class="h-btn a-btn">Read More</a>
								</div>
							</div>
						</div>
						<div class="col-xl-6 col-lg-6 col-md-12">
							<div class="habout__img mb-30">
								<img src="../assets/images/about/about.jpg" alt="" class="img-fluid">
							</div>
						</div>
					</div>
				</div>
				<div class="ability mt-80">
					<div class="row">
						<div class="col-xl-4 col-lg-4 col-md-6">
							<div class="ability__single mb-30">
								<h4>Mission</h4>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iure saepe error ad
									vitae dolorum perspiciatis quidem quasi a! Aliquid!</p>
								<div class="ability__single-btn">
									<a href="">Read More <i class="fas fa-arrow-right"></i></a>
								</div>
							</div>
						</div>
						<div class="col-xl-4 col-lg-4 col-md-6">
							<div class="ability__single mb-30">
								<h4>Vision</h4>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iure saepe error ad
									vitae dolorum perspiciatis quidem quasi a! Aliquid!</p>
								<div class="ability__single-btn">
									<a href="">Read More <i class="fas fa-arrow-right"></i></a>
								</div>
							</div>
						</div>
						<div class="col-xl-4 col-lg-4 col-md-6">
							<div class="ability__single mb-30">
								<h4>History</h4>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iure saepe error ad
									vitae dolorum perspiciatis quidem quasi a! Aliquid!</p>
								<div class="ability__single-btn">
									<a href="">Read More <i class="fas fa-arrow-right"></i></a>
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
.about-area .habout__img:after {
  position: absolute;
  content: "";
  background: var(--moon-secondary);
  width: 100%;
  height: 100%;
  right: -15px;
  bottom: -15px;
  z-index: -1;
}
.about-area .ability__single-btn a {
  color: var(--moon-secondary);
}
.about-area .ability__single-btn a i {
  margin-left: 5px;
}
</style>