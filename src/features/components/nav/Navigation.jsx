import React from 'react'
import {Link} from 'react-router-dom'

function Navigation() {
  return (<nav className="sticky navbar">
      <div className="display__logo">
        <Link to="/" className="nav__link"> <span className="logo">Portfolio App</span></Link>
      </div>
    
      <input type="checkbox" id="nav" className="hidden" />
      <label for="nav" className="nav__open"><i></i><i></i><i></i></label>
      <div className="nav">
        <ul className="nav__items">
          <li className="nav__item"><Link to="/home" className="nav__link">Home</Link></li>
          <li className="nav__item"><Link to="/about" className="nav__link">About</Link></li>
          <li className="nav__item"><Link to="/portfolio" className="nav__link">Portfolio</Link></li>
          <li className="nav__item"><Link to="/contact" className="nav__link">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation