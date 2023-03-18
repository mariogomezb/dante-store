import React from 'react'
import CarroItem from '../components/CarroItem';
import { useCarroContext } from '../context/CarroContext';
import Menu from "../components/Menu";
import Footer from '../components/Footer';

export default function Carro(){
  const {carro, totalCarro} = useCarroContext();
  
  return (
    <div className="container">
      <Menu/>
      <div>
        <h1 className="text-center my-5">Carro</h1>
        <ul className="list-group">
          {carro.map((item) => (
            <CarroItem
              key={item.id}
              item={item}
            />
          ))}

          {carro.length === 0 && (
            <li className="list-group-item text-center">
              <b>El carrito está vacío</b>
            </li>
          )}
          <li className="list-group-item list-group-item-action active text-end">
            <b>Total: ${totalCarro().toLocaleString("de-DE")}</b>
          </li>
        </ul>
      </div>
      <Footer/>
    </div>
  )
};