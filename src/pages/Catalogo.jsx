import React from 'react'
import ContenedorProducto from '../components/ContenedorProducto'
import Footer from '../components/Footer'
import Menu from '../components/Menu'

const Catalogo = () => {
  return (
    <div>
        <Menu/>
        <ContenedorProducto/>
        <Footer/>
    </div>
  )
}

export default Catalogo