import React from 'react';
import './AboutMe.css';
import profilePhoto from '../assets/profile.jpg';

function AboutMe() {
  return (
    <section id="about" className="about-me">
      <img src={profilePhoto} alt="Robbie Meucci" className="profile-pic" />
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          I'm Robbie Meucci, a recent graduate with a strong background in software engineering and data analysis. I enjoy building software that solves real problems and demonstrates clean architectural patterns. I also have a background in business and real-world experience in sales, which helps me understand client needs and deliver practical, user-focused solutions.
        </p>
        <div className="education-container">
          <ul>
            <li><strong>🎓 School:</strong> DePauw University</li>
            <li><strong>📘 Major:</strong> BA in Economics, Italian</li>
            <li><strong>📍 Years Attended:</strong> 2015–2019</li>
          </ul>
          <ul>
            <li><strong>🎓 School:</strong> Purdue University</li>
            <li><strong>📘 Major:</strong> BA in Applied Computer Science</li>
            <li><strong>⭐ GPA:</strong> 3.81</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
