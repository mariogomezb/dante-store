import React from 'react'
import logo from '../assets/img/logo_blanco.png'

const Menu = () => {
  return (
    <div className="fondo-menu">
        <nav className="navbar navbar-expand-lg bg-body-white">
            <div className="container-fluid">
            <a className="navbar-brand" href="/"><img className="logo" src={logo}/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active text-white" aria-current="page" href="/">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active text-white" aria-current="page" href="/catalogo">Catálogo</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="/carro"><i class="fa-solid fa-cart-shopping carro"></i></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="/inicia"><i class="fa-regular fa-user"></i> Entrar</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="/registro">Registrarse</a>
                </li>
            </ul>
            </div>
            </div>
        </nav>
    </div>
)
}

export default Menu