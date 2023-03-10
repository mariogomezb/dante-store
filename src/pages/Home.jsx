import React from 'react'
import Carrusel from '../components/Carrusel'
import Footer from '../components/Footer'
import Menu from '../components/Menu'

const Home = () => {
  return (
    <div className="container">
    <Menu/>
    <Carrusel/>
    <Footer/>
    </div>
  )
}

export default Home