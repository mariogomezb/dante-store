import React from 'react'
import copa from '../assets/img/copa.jpeg'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-5">Algo salió mal!!!</h1>
      <h4 className="text-center">La página que buscas nos existe</h4>
      <div className="row">
        <div className="col-12 text-center">
        <img src={copa} className="copa"></img>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <h3 className="text-center">Regresa al inicio</h3>
            <Link className="btn btn-dark" to="/">Volver al Inicio</Link>
            <h3>ó</h3>
          </div>
        </div>
        <div className="row text-center">
        <h3>visítanos en nuestras redes sociales</h3>
        </div>
        <div className="row text-center">
            <div className="col-12">
            <h5 className="text-black justify-center">Síguenos en:</h5>
            <div className="col-6"></div>
            <div className="d-flex mt-3">
                <div className="col-8">
                  <Link to="https://www.instagram.com/dante_wines/" target="_blank"><i class="fa-brands fa-instagram instagram text-black me-5"></i></Link>
                </div>
                <div className="col-2 pb-5">
                  <Link to="https://www.facebook.com/profile.php?id=100070815490807" target="_blank"><i class="fa-brands fa-facebook facebook text text-black"></i></Link>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound