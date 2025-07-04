import React from 'react'
import './Services.css'
import ServiceIMG from "../assets/photo_2024-09-05_22-58-09.jpg"
import {
  FaCube,
  FaQuinscape,
  FaPlayCircle,
  FaLandmark,
  FaCode,
  FaChalkboardTeacher,
  FaBeer
} from "react-icons/fa";



const services = [
  {
    icon: <FaCode size={40} />,
    title: "Web Application",
    description:
      "Developing web applications involve creating your website, making it one of the most vital parts of your marketing."
  },
  {
    icon: <FaQuinscape size={40} />,
    title: "Web Hoisting",
    description:
      "Web hosting is a service that allows individuals or organizations to publish a website or web application on the Internet. A web host provides the server, storage, and infrastructure needed for your website to be accessible online."
  },
  {
    icon: < FaCube size={40} />,
    title: "API Development & Integration",
    description:
      "API stands for Application Programming Interface. It allows different applications (websites, mobile apps, services) to communicate with each other by sending and receiving data."
  },
  {
    icon: < FaBeer size={40} />,
    title: "On-Page SEO",
    description:
      "On-Page SEO (also called On-Site SEO) refers to the practice of optimizing individual web pages to rank higher in search engines (like Google) and earn more relevant traffic."
  },
  {
    icon: <FaLandmark size={40} />,
    title: "Software Workflow",
    description:
      "Software Workflow refers to the step-by-step process a development team follows to build, test, release, and maintain software. It helps ensure that software is built efficiently, consistently, and with high quality."
  },
  {
    icon: <FaChalkboardTeacher size={40} />,
    title: "Payment Gateway",
    description:
      "A Payment Gateway is a service that enables your website or app to securely accept payments online, usually through credit/debit cards, bank transfers, mobile money, or digital wallets."

  }
];

const Services = () => {
  return (
    <div className='Main'>   
    
    


    <div className="service-container">
      <div className="service-left">
       
       
      </div>

      <div className="service-right">
        <h2 className="service-header">My Services</h2>
        <div className="service-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  




    </div>
  

  )
}

export default Services