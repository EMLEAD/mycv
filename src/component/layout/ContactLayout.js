import React from 'react'
import Contact from '../contact/Contact'
import { Outlet } from 'react-router-dom'

const ContactLayout = () => {
  return (
    <div>
     <Contact/>
    <Outlet/>
    </div>
  )
}

export default ContactLayout