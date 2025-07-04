import React from 'react';
import './Sidebar.css'; // Assuming you have a CSS file for styling the sidebar
import HomeIMG from "../component/assets/photo_2024-09-05_22-58-09.jpg"
const Sidebar = () => {
  return (
    <div className="sub-div">
            <img className="img" src={HomeIMG} alt="Profile" />
            </div>
  )
}

export default Sidebar