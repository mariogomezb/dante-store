import React from 'react'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Registro = () => {

  const [usernombre, setUserNombre] = useState("")
  const [usermail, setUserMail] = useState("")
  const [userpassword, setUserPassword] = useState("")

  const handleSubmit =(e)=>{
    e.preventDefault()
    if (!usermail.trim()|| !usernombre.trim()|| !userpassword.trim() ) swal("Favor ingresar todos los datos","","info");
  }

  return (
    <div className="container">
    <Menu/>
    <div className="row justify-content-center mt-5 mb-5">
      <div className="col-4">
      <Form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label"> Nombre</label>
          <input type="text" className="form-control" placeholder="Ingrese su Nombre" onChange={(e)=>setUserNombre(e.target.value)}></input>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label"> Email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese su e-mail" onChange={(e)=>setUserMail(e.target.value)}></input>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label"> Contraseña</label>
          <input type="password" className="form-control" id="exampleInputPassword1" aria-describedby="emailHelp" placeholder="Ingrese su contraseña" onChange={(e)=>setUserPassword(e.target.value)}></input>
        </div>
      <Button variant="dark" type="submit">
        Registrarse
      </Button>
    </Form>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Registro