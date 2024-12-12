'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"



const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 1,
	// spaceBetween: 20,
	slidesPerGroup: 1,
	centeredSlides: false,
	loop: true,
	autoplay: {
		delay: 4000,
	},
	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
}

export default function Projects2() {
	return (
		<>

			<div className="section-projects-2 pt-5">
				<div className="container">
					<div className="rounded-3 border border-1 position-relative overflow-hidden">
						<div className="box-linear-animation position-relative z-1">
							<div className="p-lg-8 p-md-6 p-3 position-relative z-1">
								<div className="d-flex align-items-center">
									<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
										<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
									</svg>
									<span className="text-linear-4 d-flex align-items-center"> Certificate and Badges </span>
								</div>
								<h3>Achived Certificate and Badges</h3>
								<div className="position-relative">
									<Swiper {...swiperOptions} className="swiper slider-two pb-3 position-relative">
										<div className="swiper-wrapper">
											<SwiperSlide>
												<div className="p-lg-5 p-md-4 p-3 border border-1 mt-5 bg-3">
													<div className="row">
                                                    
														{/* Project Image Slider */}
                                                        <div className="col-lg-5">
                                                            <Swiper
                                                                modules={[Navigation, Pagination]}
                                                                slidesPerView={1}
                                                                navigation={{
                                                                    nextEl: '.swiper-button-next-project',
                                                                    prevEl: '.swiper-button-prev-project',
                                                                }}
                                                                pagination={{ clickable: true }}
                                                                loop={true}
                                                                className="swiper project-image-slider"
                                                            >
                                                                <SwiperSlide>
                                                                    <img className="w-100" src="assets/imgs/home-page-2/projects/1.png" alt="Project Image 1" />
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <img className="w-100" src="assets/imgs/home-page-2/projects/2.png" alt="Project Image 2" />
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <img className="w-100" src="assets/imgs/home-page-2/projects/3.png" alt="Project Image 3" />
                                                                </SwiperSlide>
																<SwiperSlide>
                                                                    <img className="w-100" src="assets/imgs/home-page-2/projects/4.png" alt="Project Image 3" />
                                                                </SwiperSlide>
																<SwiperSlide>
                                                                    <img className="w-100" src="assets/imgs/home-page-2/projects/5.png" alt="Project Image 3" />
                                                                </SwiperSlide>
                                                            </Swiper>
                                                            <div className="swiper-button-prev-project shadow position-relative"></div>
                                                            <div className="swiper-button-next-project shadow position-relative"></div>
                                                        </div>
    
														<div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
															<h4 className="text-linear-4">
																Microsoft Learn Certificate
															</h4>
															<p>Achived certificate and badges from Microsoft learn </p>
															<ul className="mt-4 list-unstyled">
															
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Introduction to GitHub</p>
																		<p className="text-300 mb-0 text-end">Completed on 
																		9/7/2024</p>
																	</div>
																</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Introduction to GitHub administration</p>
																		<p className="text-300 mb-0 text-end">Completed on 
																		9/9/2024</p>
																	</div>
																</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Introduction to GitHub's products</p>
																		<p className="text-300 mb-0 text-end">Completed on 
																		9/13/2024</p>
																	</div>
																</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Describe cloud computing</p>
																		<p className="text-300 mb-0 text-end">Completed on 
																		12/10/2024</p>
																	</div>
																</li>	
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Explore Azure App Service</p>
																		<p className="text-300 mb-0 text-end">Completed on 
																		12/10/2024</p>
																	</div>
																</li>
															</ul>
															<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
					                                         &nbsp; &nbsp;
															</div>
														</div>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="p-lg-5 p-md-4 p-3 border border-1 mt-5 bg-3">
													<div className="row">
                                                    
														{/* Project Image Slider */}
                                                        <div className="col-lg-5">
                                                            <Swiper
                                                                modules={[Navigation, Pagination]}
                                                                slidesPerView={1}
                                                                navigation={{
                                                                    nextEl: '.swiper-button-next-project',
                                                                    prevEl: '.swiper-button-prev-project',
                                                                }}
                                                                pagination={{ clickable: true }}
                                                                loop={true}
                                                                className="swiper project-image-slider"
                                                            >
                                                                <SwiperSlide>
                                                                    <img className="w-100" src="assets/imgs/home-page-2/projects/6.jpg" alt="Project Image 1" />
                                                                </SwiperSlide>
                                                            </Swiper>
                                                            <div className="swiper-button-prev-project shadow position-relative"></div>
                                                            <div className="swiper-button-next-project shadow position-relative"></div>
                                                        </div>
    
														<div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
															<h4 className="text-linear-4">
															Microsoft Learn Student Ambassadors
															</h4>
															<p>I've successfully completed the Microsoft Learn Student Ambassadors session on Azure Resource Management!
															During this session, I gained invaluable insights into several key aspects of Azure Resource Management, including:
															</p>
															<ul className="mt-4 list-unstyled">
															
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Resource Management: Organized resources for improved.</p>
																	</div>
																</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Security: Implemented RBAC and policies for secure, authorized access.</p>
																	</div>
																</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Cost Optimization: Tracked and optimized resource usage to reduce costs.</p>
																	</div>
																</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Automation: Used ARM templates to streamline deployments.</p>
																	</div>
																</li>
															</ul>
															<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
					                                         &nbsp; &nbsp;
															</div>
														</div>
													</div>
												</div>
											</SwiperSlide>
											
											
										</div>
									</Swiper>
									<div className="position-absolute bottom-0 end-0 gap-2 pb-7 pe-5 d-none d-md-flex">
										<div className="swiper-button-prev end-0 shadow position-relative">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z" fill="white" />
											</svg>
										</div>
										<div className="swiper-button-next end-0 shadow position-relative">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="#A8FF53" />
											</svg>
										</div>
									</div>
								</div>
							</div>
							<img className="position-absolute top-0 start-0 z-0" src="assets/imgs/home-page-2/projects/bg.png" alt="zelio" />
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
