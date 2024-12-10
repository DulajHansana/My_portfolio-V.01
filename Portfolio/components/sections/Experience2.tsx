import Link from 'next/link'

export default function Experience2() {
  return (
    <>

      <section id="portfolio" className="section-experience pt-5">
        <div className="container">
          <div className="rounded-3 border border-1 position-relative overflow-hidden">
            <div className="box-linear-animation position-relative z-1">
              <div className="p-lg-8 p-md-6 p-3 position-relative z-1">
                <div className="d-flex align-items-center">
                  <svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
                    <circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
                  </svg>
                  <span className="text-linear-4 d-flex align-items-center">Experience</span>
                </div>
                <h3>
                  +3
                  <span className="text-300"> months of </span>
                  passion &nbsp;
                  <span className="text-300"> 
                    for<br />
                    programming techniques
                  </span>
                </h3>
                <div className="row mt-5">
                  <div className="col-lg-4">
                    <div className="d-flex flex-column gap-2">
                      <Link href="https://www.linkedin.com/in/dulaj-hansana-7ab300259/details/projects/" className="technology border border-1 rounded-3 p-3">
                        <div className="d-flex align-items-center gap-3">
                          {/* Add className to control size */}
                          <img src="assets/imgs/home-page-2/experience/Code.jpg" alt="zelio" className="experience-img" />
                          <div className="d-flex flex-column ms-2">
                            <h5 className="mb-1">Code Alpha</h5>
                            <span className="text-300">2024 Sep - Oct</span>
                          </div>
                        </div>
                      </Link>
                      <Link href="https://www.linkedin.com/in/dulaj-hansana-7ab300259/details/experience/" className="technology border border-1 rounded-3 p-3">
                        <div className="d-flex align-items-center gap-2">
                          <img src="assets/imgs/home-page-2/experience/Payshia.jpeg" alt="zelio" className="experience-img"/>
                          <div className="d-flex flex-column ms-2">
                            <h5 className="mb-1">Payshia Software Solutions</h5>
                            <span className="text-300">2024 Sep - Nov</span>
                          </div>
                        </div>
                      </Link>
					 
                      <Link href="https://www.linkedin.com/in/dulaj-hansana-7ab300259/details/experience/" className="technology border border-1 rounded-3 p-3">
                        <div className="d-flex align-items-center gap-2">
                          <img src="assets/imgs/home-page-2/experience/BOC.jpg" alt="zelio" className="experience-img" />
                          <div className="d-flex flex-column ms-2">
                            <h5 className="mb-1">Bank of Ceylone</h5>
                            <span className="text-300">2021 Apr - 2022 Apr</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-8 ps-lg-5 mt-5 mt-lg-0">
                    <h6 className="text-linear-4">Intern Front-End Developer</h6>
                    <ul className="mt-4">
                      <li className="text-dark mb-3"> I’ve successfully completed a series of front-end development projects as part of my learning journey with CodeAlpha . Each project challenged my skills and taught me valuable lessons in  <span className="text-secondary-2">HTML, CSS, and JavaScript.</span></li>
                      <li className="text-dark mb-3">Go to my Linkedin and Github see what have I done</li>
                      <Link href="https://www.linkedin.com/in/dulaj-hansana-7ab300259/details/projects/" className="technology border border-1 rounded-2 p-2">LinkedIn</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                      <Link href="https://github.com/DulajHansana/Code_Alpha_Tasks" className="technology border border-1 rounded-2 p-2">Github</Link>
                    </ul>
                    <h6 className="text-linear-4">Full-stack Web Developer Trainee</h6>
                    <ul className="mt-4">
                      <li className="text-dark mb-3">I was working as Full-stack Web Developer Trainee in Payshia Software solutions. It's a Startup company.
                      From that I have build and modify Webb application using <span className="text-secondary-2">PHP language.</span>Other Skills that I experienced <span className="text-secondary-2">Mysql Database, Postman</span>   Also how the communication handle in team by using <span className="text-secondary-2">Slack.</span></li>
                      <li className="text-dark mb-3">Go to my Github see my contribution</li>
                      <Link href="https://github.com/Payshia-Software-Solutions" className="technology border border-1 rounded-2 p-2">Github</Link>
                    </ul>
                   <h6 className="text-linear-4">Bank Trainee</h6>
                    <ul className="mt-4">
                      <li className="text-dark mb-3">I have done the job skill development program at Bank Of Ceylon Nelumdeniya Branch. From that I have been developed my <span className="text-secondary-2"> communication skill (Customer service), collaborate with others (Team work), Finacial Managemnet</span> also E banking and Core bakning System (Linux).</li>
                      <li className="text-dark mb-3">Go to my LinkedIn see my experience</li>
                      <Link href="https://www.linkedin.com/in/dulaj-hansana-7ab300259/details/experience/" className="technology border border-1 rounded-2 p-2">LinkedIn</Link>
                    </ul>
                    <div className="d-flex flex-wrap align-items-center gap-3 mt-7">
                      <Link href="#" className="text-300 border border-1 px-3 py-1">HTML5</Link>
                      <Link href="#" className="text-300 border border-1 px-3 py-1">CSS</Link>
                      <Link href="#" className="text-300 border border-1 px-3 py-1">React</Link>
                      <Link href="#" className="text-300 border border-1 px-3 py-1">PHP</Link>
                      <Link href="#" className="text-300 border border-1 px-3 py-1">JS</Link>
                      <Link href="#" className="text-300 border border-1 px-3 py-1">Node.js</Link>
                      <Link href="#" className="text-300 border border-1 px-3 py-1">Slack</Link>
                      <Link href="#" className="text-300 border border-1 px-3 py-1">Team Work</Link>
                      <Link href="#" className="text-300 border border-1 px-3 py-1">Customer Service</Link>
                    </div>
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
