import React from 'react'
import logo from '../assets/img/logo_blanco.png'

const Footer = () => {
  return (

    <div className=" bg-black pt-1 mt-3">
      <div className="row mt-5">
        <div className="col-5">
            <img className="logo" src={logo}/>
        </div>
        <div className="col-4">
          <ul className="d-flex mt-4">
            <a className="nav-link active text-white me-3" aria-current="page" href="/">Inicio</a>
            <a className="nav-link active text-white me-3" aria-current="page" href="/catalogo">Catálogo</a>
            <a className="nav-link text-white me-3" href="/carro"><i class="fa-solid fa-cart-shopping carro"></i></a>
            <a className="nav-link text-white" href="/inicia"><i class="fa-regular fa-user"></i> Entrar</a>
          </ul>
        </div>
        <div className="col-3">
            <h5 className="text-white">Síguenos en:</h5>
              <div className="d-flex">
                <div>
                  <a href="https://www.instagram.com/dante_wines/" target="_blank"><i class="fa-brands fa-instagram instagram text-white me-5"></i></a>
                </div>
                <div className="col">
                  <a href="https://www.facebook.com/profile.php?id=100070815490807" target="_blank"><i class="fa-brands fa-facebook facebook text text-white"></i></a>
                </div>
              </div>
        </div>
      </div>
      <div className="row text-center mt-3">
        <h7  className="text-white"><i class="fa-solid fa-copyright"></i> copyright 2023</h7>
        <h7 class="text-white mt-2 pb-3"> Sitio desarrolado por Cristobal & Mario</h7>
      </div>
  </div>
  )
}

export default Footer