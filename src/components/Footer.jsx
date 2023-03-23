import React from 'react'
import logo from '../assets/img/logo_blanco.png'
import {Link} from "react-router-dom";
import {useCarroContext} from "../context/CarroContext";
import { useFavoritosContext } from '../context/FavoritosContext';

const Footer = () => {
  const {totalCarro} = useCarroContext();
  const {userName}=useFavoritosContext()
  return (
    <div className=" bg-black pt-1 mt-3">
      <div className="row mt-5">
        <div className="col-4">
        <Link className="navbar-brand" to="/"><img class="logo" src={logo}/></Link>
        </div>
        <div className="col-5">
          <ul className="d-flex mt-4">
            <Link className="nav-link active text-white me-3" aria-current="page" to="/">Inicio</Link>
            <Link className="nav-link active text-white me-3" aria-current="page" to="/catalogo">Catálogo</Link>
            {userName &&(
            <Link className="nav-link active text-white me-3" aria-current="page" to="/favoritos">Favoritos</Link>
            )}
            {userName &&(
            <Link className="nav-link text-white me-3" to="/carro"><i class="fa-solid fa-cart-shopping carro"></i></Link>
            )}
            <Link className="nav-link text-white me-3" to="/inicia"><i class="fa-regular fa-user"></i> Entrar</Link>
            <Link className="nav-link active text-white" aria-current="page" to="/registro">Registrarse</Link>
          </ul>
        </div>
        <div className="col-3">
            <h5 className="text-white">Síguenos en:</h5>
              <div className="d-flex">
                <div>
                  <Link to="https://www.instagram.com/dante_wines/" target="_blank"><i class="fa-brands fa-instagram instagram text-white me-5"></i></Link>
                </div>
                <div className="col">
                  <Link to="https://www.facebook.com/profile.php?id=100070815490807" target="_blank"><i class="fa-brands fa-facebook facebook text text-white"></i></Link>
                </div>
              </div>
        </div>
      </div>
      <div className="row text-center mt-3">
        <h7  className="text-white"><i class="fa-solid fa-copyright"></i> copyright 2023</h7>
        <h7 class="text-white mt-2 pb-3"> Sitio desarrollado por Cristobal & Mario</h7>
      </div>
  </div>
  )
}

export default Footer