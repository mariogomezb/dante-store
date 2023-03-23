import React from 'react'
import {Link, NavLink} from "react-router-dom";
import {useCarroContext} from "../context/CarroContext";
import {formatoPrecio} from "../utils/formatoPrecio";
import logo from '../assets/img/logo_blanco.png'

import { useFavoritosContext } from '../context/FavoritosContext';

export default function Menu(){
  const {totalCarro} = useCarroContext();

  const {userName}=useFavoritosContext()

  return (
    <div className="fondo-menu">
      <nav className="navbar navbar-expand-lg bg-body-white">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img class="logo" src={logo}/></Link>
          {userName &&(
          <div className="text-white"> Bienvenido: {userName}</div>
          )}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active text-white" aria-current="page" to="/">Inicio</NavLink>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/catalogo">Catálogo</Link>
              </li>
                {userName &&(
                  <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/favoritos">Favoritos</Link>
              </li>  
                )}
              {userName&&(
              <li className="nav-item">
                <Link className="nav-link text-white" to="/carro"><i class="fa-solid fa-cart-shopping carro"></i>${formatoPrecio(totalCarro())}</Link>
              </li>
              )}
              <li className="nav-item">
                <Link className="nav-link text-white" to="/inicia"><i class="fa-regular fa-user"></i> Entrar</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/registro">Registrarse</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>  
  )
};