import React from 'react'
import { Routes,Route } from 'react-router-dom'
import View from './../components/view/View'
import About from './../components/about/About'
import Projects from './../components/projects/Projects'
import Skills from './../components/skills/Skills'
import Contact from './../components/contact/Contact'

function Routers() {
  return (<Routes>
    <Route path="/" element={<View/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/skills" element={<Skills/>}/>
    <Route path="/contact" element={<Contact/>}/>  
  </Routes>
  )
}

export default Routers