import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { navigationSelector } from './navigationSlice'
import './aside.css'


function Aside() {
    const allLinks = useSelector(navigationSelector.selectAll)

    const content = allLinks.map(item => {
        const { id, name, link, style } = item
        return <li className="nav_item" key={id}>
            <Link to={link} className={`${style} nav_link`}>{name}</Link>
        </li>
    })


    return (
        <aside className="sidebar" id="sidebar">
            <nav className="nav">
                <div className="nav_logo">
                    <Link to="/" className="logo_text">R</Link>
                </div>
                <div className="nav_menu">
                    <div className="menu">
                        <ul className="nav_list">
                            {content}
                        </ul>
                    </div>
                </div>

                <div className="btn_share">
                    <i className="uil uil-share-alt social_share"></i>
                </div>
            </nav>

        </aside>
    )
}

export default Aside