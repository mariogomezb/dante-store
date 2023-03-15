import React from 'react'
import Footer from '../components/Footer'
import Menu from '../components/Menu'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const IniciaSesion = () => {
  return (
    <div className="container">
      <Menu/>
      <div className="col-4">
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su e-mail" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Ingrese contraseña" />
      </Form.Group>
      <Button variant="dark" type="submit">
        Ingresar
      </Button>
    </Form>
    </div>
      <Footer/>
    </div>
  )
}

export default IniciaSesion