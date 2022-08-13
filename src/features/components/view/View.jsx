import React from 'react'
import './../../styles/components.css'

function View() {
    return (<section class="view container">
            <div className="view_text_container">
            <div className="view_static_txt">Hi I'm</div>
            <ul className="view_dynamic_txt">
                <li><span className='view_name'>Rasim Hesenov</span></li>
                <li><span>a Web Developer</span></li>
            </ul>
            </div>

         <div className="view_gij_container"></div>
   </section>
    )
}

export default View