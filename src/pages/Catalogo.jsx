import React from 'react'
import CardProducto from '../components/CardProducto'
import Footer from '../components/Footer'
import Menu from '../components/Menu'

import { useState, useEffect } from 'react'

const Catalogo = () => {
  const [vinos,setVinos]=useState ([]);

  useEffect(() => {
    fetch("vinos.json")
    .then((response)=>response.json())
    .then((data)=> setVinos(data));
  }, []);

  return (
    <div>
        <Menu/>
        <div className="row">
          {vinos.map((item)=>(
            <CardProducto key= {item.id}item={item}/>))}
        </div>
        <Footer/>
    </div>
  )
}

export default Catalogo