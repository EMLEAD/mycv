import React, { useEffect } from "react";
import Typed from "typed.js";
import "./Home.css";
import HomeIMG from "../assets/photo_2024-09-05_22-58-09.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  
    useEffect(() => {
      // Initialize Typed.js
      const typed = new Typed(".typed", {
        strings: ["Full-Stack Developer","Technical Writer"],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
         showCursor: true,
         cursorChar: "|",
         
        // smartBackspace: true,
      });
  
      return () => {
        typed.destroy(); // Cleanup on unmount
      };
    }, []);
    const navigate = useNavigate();
    return (
  <div className="sub-div">
        <img className="img" src={HomeIMG} alt="Profile" />
    <div className="info">
        <div className="name">
          <h1>ADEWALE MOSES OLAOLUWA</h1>
        </div>
          <div>
          <span className="typed"></span>
        </div>
        <button onClick={()=>navigate('/About')} className="btn" type="button"> Get in Touch </button>
    </div>
  </div>
  



  )
};

export default Home