import React from "react";
import "./About.css";
import HomeIMG from "../assets/photo_2024-09-05_22-58-09.jpg"


const About = () => {
  return (
    <div className="about-section">
      <div className="container">
        <div className="about">
          <h2>ABOUT ME</h2>
        </div>
        
        <div className="about-title">
          <p>
            Hello there! My name is <strong>Adewale Moses Olaoluwa</strong>. I am a full-stack
            web developer and I'm very passionate and dedicated to my work.
          </p>
          <p>
            With over 3 years of experience as a professional web developer, I have
            acquired the skills and knowledge necessary to make your project a
            success.
          </p>
        </div>

        <div className="container1">
          <div className="details">
            <div className="column">
              <h3>LANGUAGES & TECHNOLOGIES</h3>
              <ul>
                <li>HTML & CSS/Tailwind</li>
                <li>JavaScript (ES6+)</li>
                <li>React, Angular, Vue</li>
                <li>Node.js & Express</li>
                <li>MongoDB</li>
                <li>MySQL & PostgreSQL</li>
                <li>PHP & Laravel</li>
                <li>RESTful APIs</li>
              </ul>
            </div>
            <div className="column">
              <h3>SERVICES</h3>
              <ul>
                <li>Custom Web Development</li>
                <li>API Development & Integration</li>
                <li>Responsive Landing Pages</li>
                <li>SEO Optimization</li>
                <li>Payment Gateway Integration</li>
                <li>Web Hosting & Deployment</li>
                <li>Real-time Applications</li>
                <li>Software Architecture</li>
            </ul>
          </div>

          <div className="column">
            <h3>INTERESTS</h3>
            <ul>
              <li>Travel & Picnic</li>
              <li>Football</li>
              <li>Fashion & Design</li>
              <li>Reading & Writing</li>
              <li>Music & Cinema</li>
              <li>Rain & Snow</li>
            </ul>
          </div>

          <div className="column">
            <h3>CONTACT</h3>
            <p><strong>Name:</strong> Adewale Moses Olaoluwa</p>
            <p><strong>Address:</strong> 17 Emmanuel Estate, Alafara Road, Alaja, Ibadan, Oyo State, Nigeria.</p>
            <p><strong>Study:</strong> Ladoke Akintola University Of Technology, AppClick ICT Academy.</p>
            <p><strong>Degree:</strong> Bachelor of Science(BSc.)</p>
            <p><strong>Mail:</strong> adewalem88@gmail.com</p>
            <p><strong>Phone:</strong> +2347037627565/+2349069088485</p>
          </div>
        </div> {/* Close details */}
      </div> 
    </div> 
  </div> 
  );
}

export default About;
