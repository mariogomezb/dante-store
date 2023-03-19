import React from 'react'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import swal from 'sweetalert';
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const IniciaSesion = () => {

const [usermail, setUserMail] = useState("")
const [userpassword, setUserPassword] = useState("")

const handleSubmit =(e)=>{
  e.preventDefault()
  if (!usermail.trim()|| !userpassword.trim() ) swal("Favor ingresar todos los datos","","info");
}

  return (
    <div className="container">
      <Menu/>
      <div className="row justify-content-center mt-5 mb-5">
      <div className="col-4">
      <Form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label"> Email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese su e-mail" onChange={(e)=>setUserMail(e.target.value)}></input>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label"> Contraseña</label>
          <input type="password" className="form-control" id="exampleInputPassword1" aria-describedby="emailHelp" placeholder="Ingrese su contraseña" onChange={(e)=>setUserPassword(e.target.value)}></input>
        </div>
        <Button variant="dark" type="submit">
          Ingresar
        </Button>
      </Form>
    <div className="d-flex mt-3">
      <div>
        <h7> ¿Aún no estás registrado?,</h7>
      </div>
      <div>
        <h7><a className="nav-link" href="/registro">   Regístrate acá</a></h7>
      </div>
    </div>
    </div>
    </div>
      <Footer/>
    </div>
  )
}

export default IniciaSesion