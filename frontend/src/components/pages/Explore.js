import React from 'react'
import "../../CSS/Explore.css"

export default function Explore() {
  
    
  
  return (
    
		<div className="exploreDiv">
			<section id="showcase">
				<div id="myCarousel" class="carousel slide" data-ride="carousel">
					<ol className="carousel-indicators">
						<li
							data-target="#myCarousel"
							data-slide-to="0"
							className="active"
						></li>
						<li data-target="#myCarousel" data-slide-to="1" ></li>
						<li data-target="#myCarousel" data-slide-to="2"></li>
						<li data-target="#myCarousel" data-slide-to="3"></li>
						<li data-target="#myCarousel" data-slide-to="4"></li>
					</ol>
					<div className="carousel-inner">
						<div className="carousel-item carousel-image-1 active"></div>

						<div className="carousel-item carousel-image-2"></div>

						<div className="carousel-item carousel-image-3"></div>

						<div className="carousel-item carousel-image-4"></div>

						<div className="carousel-item carousel-image-5"></div>
					</div>

					<a
						href="#myCarousel"
						data-slide="prev"
						className="carousel-control-prev"
					>
						<span className="carousel-control-prev-icon"></span>
					</a>

					<a
						href="#myCarousel"
						data-slide="next"
						className="carousel-control-next"
					>
						<span className="carousel-control-next-icon"></span>
					</a>
				</div>
      </section>
      

			<section id="video-play">
							<div className="container p-5">
								<a
									href="https://www.youtube.com/watch?v=GHF_rfpFacg"
									className="video"
							>
									<i className="fas fa-play fa-3x"></i>
								</a>
								<h1>See What We Do</h1>
				</div>
			</section>

			<section id="gallery" className="py-5">
				<div className="container">
					<h1 className="text-center">Photo Gallery</h1>
					{/* <p className="text-center">Check out our photos</p> */}
					<div className="row mb-4">
						<div className="col-md-4">
							<a
								href="https://source.unsplash.com/random/560x560"
								data-toggle="lightbox"
								data-gallery="img-gallery"
								data-height="560"
								data-width="560"
							>
								<img
									src="https://source.unsplash.com/random/560x560"
									alt=""
									className="img-fluid"
								/>
							</a>
						</div>

						<div className="col-md-4">
							<a
								href="https://source.unsplash.com/random/561x561"
								data-toggle="lightbox"
								data-gallery="img-gallery"
								data-height="561"
								data-width="561"
							>
								<img
									src="https://source.unsplash.com/random/561x561"
									alt=""
									className="img-fluid"
								/>
							</a>
						</div>

						<div className="col-md-4">
							<a
								href="https://source.unsplash.com/random/562x562"
								data-toggle="lightbox"
								data-gallery="img-gallery"
								data-height="562"
								data-width="562"
							>
								<img
									src="https://source.unsplash.com/random/562x562"
									alt=""
									className="img-fluid"
								/>
							</a>
						</div>
					</div>

					<div className="row mb-4">
						<div className="col-md-4">
							<a
								href="https://source.unsplash.com/random/563x563"
								data-toggle="lightbox"
								data-gallery="img-gallery"
								data-height="563"
								data-width="563"
							>
								<img
									src="https://source.unsplash.com/random/563x563"
									alt=""
									className="img-fluid"
								/>
							</a>
						</div>

						<div className="col-md-4">
							<a
								href="https://source.unsplash.com/random/564x564"
								data-toggle="lightbox"
								data-gallery="img-gallery"
								data-height="564"
								data-width="564"
							>
								<img
									src="https://source.unsplash.com/random/564x564"
									alt=""
									className="img-fluid"
								/>
							</a>
						</div>

						<div className="col-md-4">
							<a
								href="https://source.unsplash.com/random/565x565"
								data-toggle="lightbox"
								data-gallery="img-gallery"
								data-height="565"
								data-width="565"
							>
								<img
									src="https://source.unsplash.com/random/565x565"
									alt=""
									className="img-fluid"
								/>
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
