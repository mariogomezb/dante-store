import React from 'react'
import { useState, useEffect } from 'react'
import CardProducto from '../components/CardProducto'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

const Catalogo = () => {
  const [vinos,setVinos]=useState ([]);

  useEffect(() => {
    fetch("vinos.json")
    .then((response)=>response.json())
    .then((data)=> setVinos(data));
  }, []);

  return (
    <div className="container justify-content-center">
        <Menu/>
        <div className="row ps-5">
          {vinos.map((item)=>(
            <CardProducto key= {item.id} item={item}/>))}
        </div>
        <Footer/>
    </div>
  )
}

export default Catalogo