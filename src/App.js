import './App.css';
import AboutMe from './components/AboutMe';
import ProjectCard from './components/ProjectCard';
import WorkTimeline from './components/WorkTimeline';
import Contact from './components/Contact';
import Navbar from './components/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className="page-title">Robbie Meucci's Portfolio</h1>
      <AboutMe />

      {/* Projects Section */}
      <section id="projects" style={{ padding: '2rem 0' }}>
        <h2>Projects</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <ProjectCard
              title="OOD Game"
              description="A game application that demonstrates object-oriented design patterns like Strategy, Observer, and State. Built as part of a course project."
              tech="Java, OOP, Design Patterns"
              link="https://github.com/rmeucci44/OODPatternsProject"
            />

            <ProjectCard
              title="Task Management Application"
              description="A full-stack task manager that integrates Firebase for real-time task tracking, BigQuery for analytics, and MongoDB for project metadata. Designed to demonstrate hybrid cloud architecture and efficient data routing."
              tech="React, Firebase, BigQuery, MongoDB, Node.js"
              link="https://github.com/rmeucci44/task-manager-cloud-PU"
            />

            <ProjectCard
              title="Testing & Spring Boot Application"
              description="A backend Spring Boot application built using Test-Driven Development principles. Features include dependency injection, domain-driven design, and unit/integration testing with Mockito and JUnit."
              tech="Java, Spring Boot, TDD, JUnit, Mockito"
              link="https://github.com/rmeucci44/TDDProject"
            />

            <ProjectCard
              title="Movie Critic Comparison App"
              description="A lightweight Python web application built with Bottle. Users can compare their own movie scores with critic and audience ratings, with random movies loaded from a CSV file."
              tech="Python, Bottle, HTML, CSS, CSV"
              link="https://github.com/rmeucci44/pythonMovieCritic"
            />

            <ProjectCard
              title="Hand Tracking & Biometrics"
              description="A computer vision project using OpenCV and NumPy to analyze hand images. Users manually select points to define axes, extract intensity profiles, and build feature vectors. Annotated images and a distance matrix are generated for comparison."
              tech="Python, OpenCV, NumPy, SciPy, Matplotlib"
              link="https://github.com/rmeucci44/handBiometricsProject"
            />

        </div>
        {/* Scroll button to next section */}
        <div className="scroll-down">
          <a href="#work">↓ Work Experience</a>
        </div>
      </section>

      {/* Work Experience Section - on its own line */}
      <section id="work" style={{ padding: '2rem 0' }}>
        <WorkTimeline />
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '2rem 0' }}>
        <Contact />
      </section>

    </div>
  );
}

export default App;
