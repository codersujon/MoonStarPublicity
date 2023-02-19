<template>
  <!-- PROJECTS START -->
  <div class="project-area pt-80 pb-80" id="projects">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<div class="section-title text-center mb-50">
							<span>What we do</span>
							<h2>Our latest Portfolio</h2>
							<p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptatibus?</p>
						</div>
					</div>
				</div>
				<div class="projects">
					<div class="row no-gutters">
						<div class="col-xl-4 col-lg-4 col-md-6">
							<div class="projects__item">
								<img src="../assets/images/portfolio/project1.jpg" alt="project-1">
								<div class="projects__item-overlay">
									<div class="projects__item-overlay-content">
										<a href="assets/img/project1.jpg" class="project-popup"><i
												class="fad fa-search-plus"></i></a>
										<h3>project title <span>branding</span></h3>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-4 col-lg-4 col-md-6">
							<div class="projects__item">
								<img src="../assets/images/portfolio/project2.jpg" alt="project-2">
								<div class="projects__item-overlay">
									<div class="projects__item-overlay-content">
										<a href="assets/img/project2.jpg" class="project-popup"><i
												class="fad fa-search-plus"></i></a>
										<h3>project title <span>branding</span></h3>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-4 col-lg-4 col-md-6">
							<div class="projects__item">
								<img src="../assets/images/portfolio/project3.jpg" alt="project-3">
								<div class="projects__item-overlay">
									<div class="projects__item-overlay-content">
										<a href="assets/img/project3.jpg" class="project-popup"><i
												class="fad fa-search-plus"></i></a>
										<h3>project title <span>branding</span></h3>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-4 col-lg-4 col-md-6">
							<div class="projects__item">
								<img src="../assets/images/portfolio/project4.jpg" alt="project-4">
								<div class="projects__item-overlay">
									<div class="projects__item-overlay-content">
										<a href="assets/img/project4.jpg" class="project-popup"><i
												class="fad fa-search-plus"></i></a>
										<h3>project title <span>branding</span></h3>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-4 col-lg-4 col-md-6">
							<div class="projects__item">
								<img src="../assets/images/portfolio/project5.jpg" alt="project-5">
								<div class="projects__item-overlay">
									<div class="projects__item-overlay-content">
										<a href="assets/img/project5.jpg" class="project-popup"><i
												class="fad fa-search-plus"></i></a>
										<h3>project title <span>branding</span></h3>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-4 col-lg-4 col-md-6">
							<div class="projects__item">
								<img src="../assets/images/portfolio/project6.jpg" alt="project-6">
								<div class="projects__item-overlay">
									<div class="projects__item-overlay-content">
										<a href="assets/img/project6.jpg" class="project-popup"><i
												class="fad fa-search-plus"></i></a>
										<h3>project title <span>branding</span></h3>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
  </div>
  <!-- PROJECTS END -->
</template>

<script>
export default {

}
</script>

<style scoped>
.projects__item {
  position: relative;
}
.projects__item:hover {
  cursor: pointer;
}
.projects__item:hover .projects__item-overlay {
  transform: scale(1);
}
.projects__item-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scale(0);
  transition: all 0.3s;
}
.projects__item-overlay::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background-color: var(--moon-secondary);
  opacity: 0.8;
  left: 0;
  top: 0;
}
.projects__item-overlay-content {
  color: var(--white);
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.projects__item-overlay-content i {
  font-size: 50px;
}
.projects__item-overlay-content h3 {
  font-size: 25px;
  text-transform: capitalize;
  color: var(--white);
  margin-top: 10px;
}
.projects__item-overlay-content h3 span {
  font-size: 16px;
  font-style: italic;
  font-weight: 300;
  margin-top: 10px;
}
</style>