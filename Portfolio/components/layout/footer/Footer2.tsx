
export default function Footer2() {
	return (
		<>
			<footer>
				<div className="section-footer-2 position-relative">
					<div className="container position-relative z-1 border-top border-1 pb-2 pt-4">
						<div className="text-center">
							<a className="d-flex main-logo align-items-center justify-content-center mb-3">
								<img src="assets/imgs/home-page-2/template/favicon.svg" alt="zelio" />
								<span className="fs-4 ms-2">Dulaj.dev</span>
							</a>
							<div className="d-flex justify-content-center gap-3">
								<a href="https://www.facebook.com/profile.php?id=100086962353666">
									<i className="ri-facebook-circle-fill fs-18" />
								</a>
								<a href="https://x.com/dulaj_hansana">
									<i className="ri-twitter-x-fill fs-18" />
								</a>
								<a href="https://www.linkedin.com/in/dulaj-hansana-7ab300259">
									<i className="ri-linkedin-fill fs-18" />
								</a>
								<a href="https://github.com/DulajHansana">
									<i className="ri-github-fill fs-18" />
								</a>
							</div>
							<div className="navigation d-flex align-items-center justify-content-center flex-wrap gap-4 my-4">
								<a href="#about" className="fs-6"> About me </a>
								<a href="#resume" className="fs-6"> Resume </a>
								<a href="#services" className="fs-6"> Services </a>
								<a href="#portfolio" className="fs-6"> Portfolio </a>
								<a href="#contact" className="fs-6"> Contact </a>
							</div>
						</div>
					</div>
				</div>
			</footer>

		</>
	)
}
