import React from 'react'
import logo from '../assets/img/logo.png'

const CustomNavBar = () => {
  return (
    <div className="container">
      <div>
      <nav className="navbar navbar-expand-lg bg-body-white">
                <div class="container-fluid">
                <a className="navbar-brand" href="#"><img className="logo" src={logo}/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Catalogo</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Favoritos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Iniciar Sesión</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Regístrate</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i class="fa-solid fa-cart-shopping carro"></i></a>
                    </li>
                </ul>
        </div>
        </div>
        </nav>
      </div>
    </div>
  )
}

export default CustomNavBar