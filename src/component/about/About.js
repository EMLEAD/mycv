import React from "react";
import "./About.css";
import HomeIMG from "../assets/photo_2024-09-05_22-58-09.jpg"


const About = () => {
  return (
    <div className="container">
        <div className="about">
          <h2 >ABOUT ME</h2>
          </div>
          <div className="about-title">
          <p>
            Hello there! My name is <strong>Adewale Moses Olaoluwa</strong>. I am a full-stack
            web developer and I'm very passionate and dedicated to my work.
          </p>
          <p>
            With over 3 years experience as a professional web developer, I have
            acquired the skills and knowledge necessary to make your project a
            success.
          </p>
          </div>
        

      <div className="container1">
      <div className="details">
          <div className="column">
            <h3>LANGUAGES</h3>
            <ul>
              <li>HTML & CSS/Tailwind</li>
              <li>Javascript</li>
              <li>Javascript Frameworks(React, Angular, Vue)</li>
              <li>NodeJs(Express)</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>PHP</li>
              <li>Laravel</li>
            </ul>
          </div>
          <div className="column">
            <h3>SERVICES</h3>
            <ul>
              <li>Web Development</li>
              <li>API Development and Integration</li>
              <li>Landing Page</li>
              <li>On-Page SEO</li>
              <li>Payment Gateway</li>
               <li>Web Hosting</li>
                <li>Real time programming</li>
                 <li>Software Workflow</li>
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
        </div>
      </div>
    </div>
  );
}

export default About;
