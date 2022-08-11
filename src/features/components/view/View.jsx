import React from 'react'
import './../../styles/components.css'

function View() {
    return (
        <div className="view">
            <div className="view_static_txt">I'm</div>
            <ul className="view_dynamic_txt">
                <li><span className='view_name'>Rasim <span className='visible_searname'>Hesenov</span></span></li>
                <li><span>a Web Developer</span></li>
            </ul>
        </div>
    )
}

export default View