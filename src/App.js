import React from 'react'
import './App.css'
import Sidebar from './component/Sidebar'
import Header from "./component/header/Header"
import Home from './component/home/Home'
import About from './component/about/About'
import Services from "./component/services/Services"
// import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'
import ContactLayout from "./component/layout/ContactLayout"
import { BrowserRouter, Routes,Route } from 'react-router-dom'
// import info from './component/layout/info'
// import {FaLinkedin, FaFacebook,FaGithub,FaInstagramSquare,FaTwitter } from "react-icons/fa";

const App = () => {
  return (
    < BrowserRouter>
      <Header/>
    
      <Routes>
 <Route element={<Home/>} path='/'/>
 <Route element={<About/>} path='/about'/>
 <Route element={<Services/>} path='/Services'/>
 <Route element={<ContactLayout/>} path='/Contact'>

 </Route>
</Routes>
<Footer/>



</BrowserRouter>
    
  )
}

export default App