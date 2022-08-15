import React from 'react'
import Aside from '../components/aside/Aside'
import Routers from './../routers/Routers'

function Dashboard() {
  return (<div className='dashboard'>
        <Aside/>
        <Routers/>
    </div>
  )
}

export default Dashboard