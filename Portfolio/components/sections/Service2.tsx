
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
