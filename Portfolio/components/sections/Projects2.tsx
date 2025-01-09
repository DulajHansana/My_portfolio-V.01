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
									<span className="text-linear-4 d-flex align-items-center"> Projects </span>
								</div>
								<h3>My Recent Works</h3>
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
                                                                    <img className="w-100" src="assets/imgs/home-page-2/projects/13.jpeg" alt="Project Image 1" />
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <img className="w-100" src="assets/imgs/home-page-2/projects/14.jpeg" alt="Project Image 2" />
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <img className="w-100" src="assets/imgs/home-page-2/projects/15.jpeg" alt="Project Image 3" />
                                                                </SwiperSlide>
																<SwiperSlide>
                                                                    <img className="w-100" src="assets/imgs/home-page-2/projects/16.jpeg" alt="Project Image 3" />
                                                                </SwiperSlide>
																
                                                            </Swiper>
                                                            <div className="swiper-button-prev-project shadow position-relative"></div>
                                                            <div className="swiper-button-next-project shadow position-relative"></div>
                                                        </div>
														<div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
															<h4 className="text-linear-4">
															Cafeteria Automation System<br />
															
															</h4>
															<p>This is a group project that we done in our 2nd year on Ditital Control System module in collaborate with faculty of technology University of Sri Jayawardhenapura</p>
															<ul className="mt-4 list-unstyled">
																<li className="text-secondary-2 mb-3 border-bottom pb-3">Project Info</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Supervisor</p>
																		<p className="text-300 mb-0 text-end">Dr.Dinusha Malshan </p>
																	</div>
																</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Completion Time</p>
																		<p className="text-300 mb-0 text-end">6 months</p>
																	</div>
																</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Technologies</p>
																		<p className="text-300 mb-0 text-end">Aarduino, C language</p>
																	</div>
																</li>
															</ul>
															<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
																<Link href="https://github.com/DulajHansana/Cafeteria_Automation_System" className="text-300 border-bottom border-1 px-2 pb-2 link-hover">
																	<svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
																		<path d="M12.001 2.5C6.47598 2.5 2.00098 6.975 2.00098 12.5C2.00098 16.925 4.86348 20.6625 8.83848 21.9875C9.33848 22.075 9.52598 21.775 9.52598 21.5125C9.52598 21.275 9.51348 20.4875 9.51348 19.65C7.00098 20.1125 6.35098 19.0375 6.15098 18.475C6.03848 18.1875 5.55098 17.3 5.12598 17.0625C4.77598 16.875 4.27598 16.4125 5.11348 16.4C5.90098 16.3875 6.46348 17.125 6.65098 17.425C7.55098 18.9375 8.98848 18.5125 9.56348 18.25C9.65098 17.6 9.91348 17.1625 10.201 16.9125C7.97598 16.6625 5.65098 15.8 5.65098 11.975C5.65098 10.8875 6.03848 9.9875 6.67598 9.2875C6.57598 9.0375 6.22598 8.0125 6.77598 6.6375C6.77598 6.6375 7.61348 6.375 9.52598 7.6625C10.326 7.4375 11.176 7.325 12.026 7.325C12.876 7.325 13.726 7.4375 14.526 7.6625C16.4385 6.3625 17.276 6.6375 17.276 6.6375C17.826 8.0125 17.476 9.0375 17.376 9.2875C18.0135 9.9875 18.401 10.875 18.401 11.975C18.401 15.8125 16.0635 16.6625 13.8385 16.9125C14.201 17.225 14.5135 17.825 14.5135 18.7625C14.5135 20.1 14.501 21.175 14.501 21.5125C14.501 21.775 14.6885 22.0875 15.1885 21.9875C19.259 20.6133 21.9999 16.7963 22.001 12.5C22.001 6.975 17.526 2.5 12.001 2.5Z" fill="#8F8F92" />
																	</svg>
																	View on Github
																</Link>
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
                                                                    <img className="w-100" src="assets/imgs/home-page-2/projects/18.jpg" alt="Project Image 1" />
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <img className="w-100" src="assets/imgs/home-page-2/projects/19.png" alt="Project Image 2" />
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <img className="w-100" src="assets/imgs/home-page-2/projects/20.png" alt="Project Image 3" />
                                                                </SwiperSlide>					
                                                            </Swiper>
                                                            <div className="swiper-button-prev-project shadow position-relative"></div>
                                                            <div className="swiper-button-next-project shadow position-relative"></div>
                                                        </div>
														<div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
															<h4 className="text-linear-4">
																Simple Calculator <br />
																With C#
															</h4>
															<p>This is a simple Windows Forms Calculator Application built using C# in Visual Studio. It performs basic arithmetic operations such as addition, subtraction, multiplication, and division. The calculator features a clean and intuitive UI, enabling users to easily input numbers and perform calculations.</p>
															<ul className="mt-4 list-unstyled">
																<li className="text-secondary-2 mb-3 border-bottom pb-3">Project Info</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Client</p>
																		<p className="text-300 mb-0 text-end">USJP</p>
																	</div>
																</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Completion Time</p>
																		<p className="text-300 mb-0 text-end">1 Week</p>
																	</div>
																</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Technologies</p>
																		<p className="text-300 mb-0 text-end">C#, Visual Stidio</p>
																	</div>
																</li>
															</ul>
															<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
																
																<Link href="https://github.com/DulajHansana/Simple-Calculator.git" className="text-300 border-bottom border-1 px-2 pb-2 link-hover">
																	<svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
																		<path d="M12.001 2.5C6.47598 2.5 2.00098 6.975 2.00098 12.5C2.00098 16.925 4.86348 20.6625 8.83848 21.9875C9.33848 22.075 9.52598 21.775 9.52598 21.5125C9.52598 21.275 9.51348 20.4875 9.51348 19.65C7.00098 20.1125 6.35098 19.0375 6.15098 18.475C6.03848 18.1875 5.55098 17.3 5.12598 17.0625C4.77598 16.875 4.27598 16.4125 5.11348 16.4C5.90098 16.3875 6.46348 17.125 6.65098 17.425C7.55098 18.9375 8.98848 18.5125 9.56348 18.25C9.65098 17.6 9.91348 17.1625 10.201 16.9125C7.97598 16.6625 5.65098 15.8 5.65098 11.975C5.65098 10.8875 6.03848 9.9875 6.67598 9.2875C6.57598 9.0375 6.22598 8.0125 6.77598 6.6375C6.77598 6.6375 7.61348 6.375 9.52598 7.6625C10.326 7.4375 11.176 7.325 12.026 7.325C12.876 7.325 13.726 7.4375 14.526 7.6625C16.4385 6.3625 17.276 6.6375 17.276 6.6375C17.826 8.0125 17.476 9.0375 17.376 9.2875C18.0135 9.9875 18.401 10.875 18.401 11.975C18.401 15.8125 16.0635 16.6625 13.8385 16.9125C14.201 17.225 14.5135 17.825 14.5135 18.7625C14.5135 20.1 14.501 21.175 14.501 21.5125C14.501 21.775 14.6885 22.0875 15.1885 21.9875C19.259 20.6133 21.9999 16.7963 22.001 12.5C22.001 6.975 17.526 2.5 12.001 2.5Z" fill="#8F8F92" />
																	</svg>
																	View on Github
																</Link>
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
                                                                    <img className="w-100" src="assets/imgs/home-page-2/projects/21.png" alt="Project Image 1" />
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <img className="w-100" src="assets/imgs/home-page-2/projects/20.png" alt="Project Image 2" />
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <img className="w-100" src="assets/imgs/home-page-2/projects/22.png" alt="Project Image 3" />
                                                                </SwiperSlide>					
                                                            </Swiper>
                                                            <div className="swiper-button-prev-project shadow position-relative"></div>
                                                            <div className="swiper-button-next-project shadow position-relative"></div>
                                                        </div>
														<div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
															<h4 className="text-linear-4">
															E commerce website
																
															</h4>
															<p>This is a Demo e commerce website build on Basic HTML, CSS, Javascript.</p>
															<ul className="mt-4 list-unstyled">
																<li className="text-secondary-2 mb-3 border-bottom pb-3">Project Info</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Client</p>
																		<p className="text-300 mb-0 text-end">USJP</p>
																	</div>
																</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Completion Time</p>
																		<p className="text-300 mb-0 text-end">3 Week</p>
																	</div>
																</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Technologies</p>
																		<p className="text-300 mb-0 text-end">HTML, CSS, Javascript, VS code</p>
																	</div>
																</li>
															</ul>
															<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
																
																<Link href="https://github.com/DulajHansana/E-Commerce-web-Site.git" className="text-300 border-bottom border-1 px-2 pb-2 link-hover">
																	<svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
																		<path d="M12.001 2.5C6.47598 2.5 2.00098 6.975 2.00098 12.5C2.00098 16.925 4.86348 20.6625 8.83848 21.9875C9.33848 22.075 9.52598 21.775 9.52598 21.5125C9.52598 21.275 9.51348 20.4875 9.51348 19.65C7.00098 20.1125 6.35098 19.0375 6.15098 18.475C6.03848 18.1875 5.55098 17.3 5.12598 17.0625C4.77598 16.875 4.27598 16.4125 5.11348 16.4C5.90098 16.3875 6.46348 17.125 6.65098 17.425C7.55098 18.9375 8.98848 18.5125 9.56348 18.25C9.65098 17.6 9.91348 17.1625 10.201 16.9125C7.97598 16.6625 5.65098 15.8 5.65098 11.975C5.65098 10.8875 6.03848 9.9875 6.67598 9.2875C6.57598 9.0375 6.22598 8.0125 6.77598 6.6375C6.77598 6.6375 7.61348 6.375 9.52598 7.6625C10.326 7.4375 11.176 7.325 12.026 7.325C12.876 7.325 13.726 7.4375 14.526 7.6625C16.4385 6.3625 17.276 6.6375 17.276 6.6375C17.826 8.0125 17.476 9.0375 17.376 9.2875C18.0135 9.9875 18.401 10.875 18.401 11.975C18.401 15.8125 16.0635 16.6625 13.8385 16.9125C14.201 17.225 14.5135 17.825 14.5135 18.7625C14.5135 20.1 14.501 21.175 14.501 21.5125C14.501 21.775 14.6885 22.0875 15.1885 21.9875C19.259 20.6133 21.9999 16.7963 22.001 12.5C22.001 6.975 17.526 2.5 12.001 2.5Z" fill="#8F8F92" />
																	</svg>
																	View on Github
																</Link>
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
                                                                    <img className="w-100" src="assets/imgs/home-page-2/projects/27.gif" alt="Project Image 1" />
                                                                </SwiperSlide>
																<SwiperSlide>
                                                                    <img className="w-100" src="assets/imgs/home-page-2/projects/26.png" alt="Project Image 1" />
                                                                </SwiperSlide>					
                                                            </Swiper>
                                                            <div className="swiper-button-prev-project shadow position-relative"></div>
                                                            <div className="swiper-button-next-project shadow position-relative"></div>
                                                        </div>
														<div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
															<h4 className="text-linear-4">
															Redesign of the HUTCH Mobile App Homepage!
																
															</h4>
															<p>After thoroughly exploring user experience and interface design, I’m excited to unveil my redesigned version of the Hutch Mobile App homepage. By using Figma Design</p>
															<ul className="mt-4 list-unstyled">
																<li className="text-secondary-2 mb-3 border-bottom pb-3">Project Info</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Client</p>
																		<p className="text-300 mb-0 text-end">USJP</p>
																	</div>
																</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Completion Time</p>
																		<p className="text-300 mb-0 text-end">1 Week</p>
																	</div>
																</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Technologies</p>
																		<p className="text-300 mb-0 text-end">UX/UI, Figma Design</p>
																	</div>
																</li>
															</ul>
															<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
																<Link href="https://www.figma.com/design/uwONSYSPRlCVbruOajHviU/HUTCH-App?node-id=0-1&t=ZdYHcFEwUqJYzy4g-1" className="text-300 border-bottom border-1 px-2 pb-2 link-hover">
																	<svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13" fill="none">
																		<path d="M11.0037 3.91421L2.39712 12.5208L0.98291 11.1066L9.5895 2.5H2.00373V0.5H13.0037V11.5H11.0037V3.91421Z" fill="#8F8F92" />
																	</svg>
																	Live Demo
																</Link>
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
                                                                    <img className="w-100" src="assets/imgs/home-page-2/projects/27.gif" alt="Project Image 1" />
                                                                </SwiperSlide>
																<SwiperSlide>
                                                                    <img className="w-100" src="assets/imgs/home-page-2/projects/26.png" alt="Project Image 1" />
                                                                </SwiperSlide>					
                                                            </Swiper>
                                                            <div className="swiper-button-prev-project shadow position-relative"></div>
                                                            <div className="swiper-button-next-project shadow position-relative"></div>
                                                        </div>
														<div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
															<h4 className="text-linear-4">
															Front-End Development Internship Program
																
															</h4>
															<p>I’m thrilled to share that I’ve successfully completed a series of front-end development projects as part of my learning journey with CodeAlpha . Each project challenged my skills and taught me valuable lessons in HTML, CSS, and JavaScript. Here’s a breakdown of what I built:
															</p>
															<ul className="mt-4 list-unstyled">
																<li className="text-secondary-2 mb-3 border-bottom pb-3">Project Info</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Client</p>
																		<p className="text-300 mb-0 text-end">Code Alpha</p>
																	</div>
																</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Completion Time</p>
																		<p className="text-300 mb-0 text-end">1 month</p>
																	</div>
																</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Technologies</p>
																		<p className="text-300 mb-0 text-end">HTMl, CSS, JavaScript</p>
																	</div>
																</li>
															</ul>
															<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
																<Link href="https://github.com/DulajHansana/Front-End-Development-Internship-Program.git" className="text-300 border-bottom border-1 px-2 pb-2 link-hover">
																	<svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
																		<path d="M12.001 2.5C6.47598 2.5 2.00098 6.975 2.00098 12.5C2.00098 16.925 4.86348 20.6625 8.83848 21.9875C9.33848 22.075 9.52598 21.775 9.52598 21.5125C9.52598 21.275 9.51348 20.4875 9.51348 19.65C7.00098 20.1125 6.35098 19.0375 6.15098 18.475C6.03848 18.1875 5.55098 17.3 5.12598 17.0625C4.77598 16.875 4.27598 16.4125 5.11348 16.4C5.90098 16.3875 6.46348 17.125 6.65098 17.425C7.55098 18.9375 8.98848 18.5125 9.56348 18.25C9.65098 17.6 9.91348 17.1625 10.201 16.9125C7.97598 16.6625 5.65098 15.8 5.65098 11.975C5.65098 10.8875 6.03848 9.9875 6.67598 9.2875C6.57598 9.0375 6.22598 8.0125 6.77598 6.6375C6.77598 6.6375 7.61348 6.375 9.52598 7.6625C10.326 7.4375 11.176 7.325 12.026 7.325C12.876 7.325 13.726 7.4375 14.526 7.6625C16.4385 6.3625 17.276 6.6375 17.276 6.6375C17.826 8.0125 17.476 9.0375 17.376 9.2875C18.0135 9.9875 18.401 10.875 18.401 11.975C18.401 15.8125 16.0635 16.6625 13.8385 16.9125C14.201 17.225 14.5135 17.825 14.5135 18.7625C14.5135 20.1 14.501 21.175 14.501 21.5125C14.501 21.775 14.6885 22.0875 15.1885 21.9875C19.259 20.6133 21.9999 16.7963 22.001 12.5C22.001 6.975 17.526 2.5 12.001 2.5Z" fill="#8F8F92" />
																	</svg>
																	View on Github
																</Link>
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
                                                                    <img className="w-100" src="assets/imgs/home-page-2/projects/27.gif" alt="Project Image 1" />
                                                                </SwiperSlide>
																<SwiperSlide>
                                                                    <img className="w-100" src="assets/imgs/home-page-2/projects/26.png" alt="Project Image 1" />
                                                                </SwiperSlide>					
                                                            </Swiper>
                                                            <div className="swiper-button-prev-project shadow position-relative"></div>
                                                            <div className="swiper-button-next-project shadow position-relative"></div>
                                                        </div>
														<div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
															<h4 className="text-linear-4">
															Spark-Chat Web Application
															</h4>
															<p>SparkChat is a real-time messaging platform that enables seamless communication across devices. As part of the Code Alphaz team, I played a key role in building and upgrading the platform’s infrastructure to support a rapidly growing user base. By integrating React for the front end and Ballerina for the back end, we significantly enhanced real-time communication, scalability, and cross-device synchronization.</p>
															<ul className="mt-4 list-unstyled">
																<li className="text-secondary-2 mb-3 border-bottom pb-3">Project Info</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Client</p>
																		<p className="text-300 mb-0 text-end">USJP</p>
																	</div>
																</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Completion Time</p>
																		<p className="text-300 mb-0 text-end">1 Week</p>
																	</div>
																</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Technologies</p>
																		<p className="text-300 mb-0 text-end">UX/UI, Figma Design</p>
																	</div>
																</li>
															</ul>
															<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
																<Link href="https://www.figma.com/design/uwONSYSPRlCVbruOajHviU/HUTCH-App?node-id=0-1&t=ZdYHcFEwUqJYzy4g-1" className="text-300 border-bottom border-1 px-2 pb-2 link-hover">
																	<svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13" fill="none">
																		<path d="M11.0037 3.91421L2.39712 12.5208L0.98291 11.1066L9.5895 2.5H2.00373V0.5H13.0037V11.5H11.0037V3.91421Z" fill="#8F8F92" />
																	</svg>
																	Live Demo
																</Link>
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
