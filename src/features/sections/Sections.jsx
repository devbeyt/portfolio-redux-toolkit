import React from 'react'
import About from './../components/about/About'
import Projects from './../components/projects/Projects'
import Skills from './../components/skills/Skills'
import Contact from './../components/contact/Contact'

function Sections() {
  return (
    <div className='sections'>
       <About/>
       <Projects/>
       <Skills/>
       <Contact/>
    </div>
  )
}

export default Sections