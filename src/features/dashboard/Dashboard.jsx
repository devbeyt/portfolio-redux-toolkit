import React from 'react'
import Footer from '../components/footer/Footer'
import Navigation from '../components/nav/Navigation'
import Sections from '../sections/Sections'
import View from './../components/view/View'


function Dashboard() {
  return (<div className='dashboard'>
        <Navigation/>
        <View/>
        <Sections/>
        <Footer/>
    </div>
  )
}

export default Dashboard