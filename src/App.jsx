import "./App.css";
import certificate1 from "./assets/certificate1.png";
import certificate2 from "./assets/certificate2.png";


function App() {
  return (
    <div className="portfolio">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <span>H</span>
          Hiral
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#certificates">Certificates</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="cv-btn">Download CV</button>
      </nav>


      {/* Home */}
      <section id="home" className="home">

        <div className="home-left">

          <p className="hello">👋 Hello, I'm</p>

          <h1>
            Hiral <span>Chavda</span>
          </h1>

          <h2>Full Stack Developer</h2>

          <p className="home-text">
            I build modern, responsive and user-friendly web
            applications using React, JavaScript, Tailwind CSS
            and other modern technologies.
          </p>

          <div className="home-buttons">
            <a href="#projects" className="primary-btn">
              View My Projects →
            </a>

            <a href="#contact" className="outline-btn">Contact Me</a>
          </div>

          <div className="social-icons">
            <a href="#"><i className="fa-brands fa-github"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-solid fa-envelope"></i></a>
          </div>

        </div>


        <div className="home-right">

          <div className="image-bg">

            <img src="/profile.png" alt="Hiral" />

          </div>

          <div className="code-text">
            Code<br />
            Create<br />
            Grow ♥
          </div>

        </div>

      </section>


      {/* About */}
      <section id="about" className="about">

        <div className="about-image">
          <img src="/about.png" alt="About Hiral" />
        </div>

        <div className="about-content">

          <p className="small-title">— ABOUT ME</p>

          <h2>Who I <span>Am</span></h2>

          <p>
            I am a passionate Full Stack Developer with a strong
            interest in building modern web applications. I enjoy
            solving problems, learning new technologies and creating
            something meaningful.
          </p>

          <p>
            My goal is to grow as a developer and work on exciting
            projects that help me improve my skills.
          </p>

          <div className="about-info">

            <div>
              <b> BCA Graduate</b>
              <small>Computer Applications</small>
            </div>

            <div>
              <b> Gujarat</b>
              <small>India</small>
            </div>

            <div>
              <b> Always Learning</b>
              <small>Better Every Day</small>
            </div>

          </div>

        </div>

      </section>


      {/* Skills */}
      <section id="skills" className="skills">

        <p className="small-title">— MY SKILLS</p>

        <h2>Technologies I <span>Master</span></h2>

        <p className="section-text">
          I have worked with a variety of modern technologies and
          tools to build responsive and efficient web applications.
        </p>


        <div className="skill-container">

          <div className="skill-card">
            <h3>HTML</h3>
            <p>95%</p>
            <div className="progress">
              <div style={{ width: "95%" }}></div>
            </div>
          </div>

          <div className="skill-card">
            <h3>CSS</h3>
            <p>90%</p>
            <div className="progress">
              <div style={{ width: "90%" }}></div>
            </div>
          </div>

          <div className="skill-card">
            <h3>JavaScript</h3>
            <p>85%</p>
            <div className="progress">
              <div style={{ width: "85%" }}></div>
            </div>
          </div>

          <div className="skill-card">
            <h3>React</h3>
            <p>80%</p>
            <div className="progress">
              <div style={{ width: "80%" }}></div>
            </div>
          </div>

          <div className="skill-card">
            <h3>Tailwind CSS</h3>
            <p>85%</p>
            <div className="progress">
              <div style={{ width: "85%" }}></div>
            </div>
          </div>

          <div className="skill-card">
            <h3>GitHub</h3>
            <p>75%</p>
            <div className="progress">
              <div style={{ width: "75%" }}></div>
            </div>
          </div>

        </div>

      </section>


      {/* Certificates */}
      <section id="certificates" className="certificates">

        <p className="small-title">— MY CERTIFICATES</p>

        <h2>My <span>Certificates</span></h2>

        <div className="certificate-container">

          <div className="certificate-card">
            <img src={certificate1} alt="Certificate" />
            <h3>React Web Development</h3>
            <p>Web Development Certificate</p>
          </div>

          <div className="certificate-card">
            <img src={certificate2} alt="Certificate" />
            <h3>JavaScript Basics</h3>
            <p>JavaScript Certificate</p>
          </div>

          

        </div>

      </section>

      {/* Projects */}
      <section id="projects" className="projects">

        <p className="small-title">— MY PROJECTS</p>

        <h2>Featured <span>Projects</span></h2>

        <div className="project-container">

          <div className="project-card">

            <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800" alt="FoodMood" />

            <div className="project-content">
              <small>HTML | CSS | JS</small>
              <h3>FoodMood</h3>

              <p>
                Restaurant website with login, menu and food
                category pages.
              </p>

              <a href="#">View Project →</a>
            </div>

          </div>


          <div className="project-card">

            <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800" alt="Movie Website" />

            <div className="project-content">
              <small>HTML | CSS | JS</small>
              <h3>Movie Website</h3>

              <p>
                Responsive movie website with login page and
                movie menu.
              </p>

              <a href="#">View Project →</a>
            </div>

          </div>


          <div className="project-card">

            <img src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800" alt="Pizza Website" />

            <div className="project-content">
              <small>React | Tailwind</small>
              <h3>Pizza Website</h3>

              <p>
                React pizza website with different pizza
                components and routing.
              </p>

              <a href="#">View Project →</a>
            </div>

          </div>

        </div>

      </section>


      {/* Contact */}
      <section id="contact" className="contact">

        <div className="contact-left">

          <p className="small-title">— GET IN TOUCH</p>

          <h2>Contact <span>Me</span></h2>

          <p>
            Have a project in mind or just want to say hi?
            Feel free to drop me a message.
          </p>

          <div className="contact-details">
            <p>✉ hiral@gmail.com</p>
            <p>📍 Gujarat, India</p>
          </div>

        </div>


        <div className="contact-form">

          <div className="input-row">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />

          </div>

          <textarea rows="6" placeholder="Your Message"></textarea>
          <button>Send Message →</button>

        </div>

      </section>


      {/* Footer */}
      <footer>

        <div className="logo">
          <span>H</span>
          Hiral
        </div>

        <p>© 2026 Hiral Chavda. All Rights Reserved.
        </p>

        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>

      </footer>

    </div>
  );
}

export default App;