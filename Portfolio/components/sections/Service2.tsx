
import Link from 'next/link'

export default function Service2() {
	return (
		<>

			<section id="services" className="section-service-2 pt-5">
				<div className="container">
					<div className="rounded-3 border border-1 position-relative overflow-hidden">
						<div className="box-linear-animation position-relative z-1 p-lg-5 p-1 p-md-4">
							<div className="position-relative z-1">
								<div className="text-center">
									<div className="d-flex align-items-center justify-content-center">
										<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
											<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
										</svg>
										<span className="text-linear-4 d-flex align-items-center"> Creative </span>
									</div>
									<h3>
										<span className="text-300" style={{ marginRight: '10px' }}>Tailored</span>
										Web and App Development
										<span className="text-300">
											<br />
											to Drive Your Business Forward
											</span>
											</h3>

								</div>
								<div className="container mt-5">
									<div className="row g-4">
										<div className="col-lg-4 col-md-6">
											<div className="card-servies-2 rounded-2 h-100 hover-up">
												<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
													<path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z" fill="#1F1F24" />
												</svg>
												<h6 className="my-3 fw-medium">Web &amp; App Development</h6>
												<p className="fs-7 text-300 fw-regular">Crafting visually appealing and user-friendly interfaces using <span className="text-secondary-2">HTML</span>, <span className="text-secondary-2">CSS</span>, <span className="text-secondary-2">JavaScript</span>, <span className="text-secondary-2">Dart</span>, and modern frameworks like React and Flutter.</p>
											</div>
										</div>
										<div className="col-lg-4 col-md-6">
										     <div className="card-servies-2 rounded-2 h-100 hover-up">
												<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
													<path d="M4.00436 6.41662L0.761719 3.17398L2.17593 1.75977L5.41857 5.00241H20.6603C21.2126 5.00241 21.6603 5.45013 21.6603 6.00241C21.6603 6.09973 21.6461 6.19654 21.6182 6.28976L19.2182 14.2898C19.0913 14.7128 18.7019 15.0025 18.2603 15.0025H6.00436V17.0025H17.0044V19.0025H5.00436C4.45207 19.0025 4.00436 18.5547 4.00436 18.0025V6.41662ZM6.00436 7.00241V13.0025H17.5163L19.3163 7.00241H6.00436ZM5.50436 23.0025C4.67593 23.0025 4.00436 22.3309 4.00436 21.5025C4.00436 20.674 4.67593 20.0025 5.50436 20.0025C6.33279 20.0025 7.00436 20.674 7.00436 21.5025C7.00436 22.3309 6.33279 23.0025 5.50436 23.0025ZM17.5044 23.0025C16.6759 23.0025 16.0044 22.3309 16.0044 21.5025C16.0044 20.674 16.6759 20.0025 17.5044 20.0025C18.3328 20.0025 19.0044 20.674 19.0044 21.5025C19.0044 22.3309 18.3328 23.0025 17.5044 23.0025Z" fill="#1F1F24" />
												</svg>
												<h6 className="my-3 fw-medium">E-commerce Solutions</h6>
												<p className="fs-7 text-300 fw-regular">Developing scalable and secure payment solutions for <span className="text-secondary-2">e-commerce platforms</span> tailored to your business needs.</p>
											</div>
										</div>
										<div className="col-lg-4 col-md-6">
										<div className="card-servies-2 rounded-2 h-100 hover-up">
												<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
													<path d="M3 2.9918C3 2.44405 3.44495 2 3.9934 2H20.0066C20.5552 2 21 2.45531 21 2.9918V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918ZM19 11V4H5V11H19ZM19 13H5V20H19V13ZM9 6H15V8H9V6ZM9 15H15V17H9V15Z" fill="#1F1F24" />
												</svg>
												<h6 className="my-3 fw-medium">Database Management</h6>
												<p className="fs-7 text-300 fw-regular">Designing and managing databases with SQL and NoSQL technologies such as <span className="text-secondary-2">MySQL</span>, <span className="text-secondary-2">PostgreSQL</span>, and <span className="text-secondary-2">MongoDB</span>.</p>
											</div>
											
										</div>
									</div>
									<div className="text-center pt-60">
										<p className="text-300">
											Excited to take on <span className="text-dark">new projects</span> and collaborate. <br />
											Let's chat about your ideas. <Link href="#" className="text-primary-2">Reach out!</Link>
										</p>
									</div>
								</div>
							</div>
							<img className="position-absolute top-0 start-0 z-0" src="assets/imgs/home-page-2/services/bg.png" alt="zelio" />
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
