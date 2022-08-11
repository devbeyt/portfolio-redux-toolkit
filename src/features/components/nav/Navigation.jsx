import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { navigationSelector } from './navigationSlice'

function Navigation() {
  const allLinks = useSelector(navigationSelector.selectAll)

  const content = allLinks.map(item => {
    const { id, name, link } = item
    return <li className="nav__item" key={id}><Link to={link} className="nav__link">{name}</Link></li>
  })


  return (<nav className="sticky navbar">
    <div className="display__logo">
      <Link to="/" className="nav__link"> <span className="logo">Portfolio App</span></Link>
    </div>
    <input type="checkbox" id="nav" className="hidden" />
    <label htmlFor="nav" className="nav__open"><i></i><i></i><i></i></label>
    <div className="nav">
      <ul className="nav__items">
        {content}
      </ul>
    </div>
  </nav>
  )
}

export default Navigation