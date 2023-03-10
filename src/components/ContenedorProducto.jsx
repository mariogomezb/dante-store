import React from 'react'

import danteBlanco from '../assets/img/Dante-blend-blanco-fondo-blanco.jpg'
import danteTinto from '../assets/img/Dante-blend-tinto-fondo-blanco.jpg'
import grus from '../assets/img/grus.jpg'
import espumante from '../assets/img/espumante.jpg'
import meli from '../assets/img/meli-dueno.jpg'
import toco from '../assets/img/toco.jpg'
import vigno from '../assets/img/vigno.jpg'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ContenedorProducto = () => {
  return (
    <>
    <div className="container mt-5 text-center d-flex">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={danteBlanco} />
      <Card.Body>
        <Card.Title>Dante Blanco</Card.Title>
        <Card.Text>
          $ 6.990.-
        </Card.Text>
        <Button variant="dark">Agregar al Carro</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={danteTinto} />
      <Card.Body>
        <Card.Title>Dante Tinto</Card.Title>
        <Card.Text>
          $ 6.990.-
        </Card.Text>
        <Button variant="dark">Agregar al Carro</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={grus} />
      <Card.Body>
        <Card.Title>Grus</Card.Title>
        <Card.Text>
          $ 25.990.-
        </Card.Text>
        <Button variant="dark">Agregar al Carro</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={espumante} />
      <Card.Body>
        <Card.Title>Dante Espumante</Card.Title>
        <Card.Text>
          $ 5.990.-
        </Card.Text>
        <Button variant="dark">Agregar al Carro</Button>
      </Card.Body>
    </Card>
    </div>
    
    <div className="text-center d-flex mt-5">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={meli} />
      <Card.Body>
        <Card.Title>Meli</Card.Title>
        <Card.Text>
          $ 6.990.-
        </Card.Text>
        <Button variant="dark">Agregar al Carro</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={toco} />
      <Card.Body>
        <Card.Title>Tococo</Card.Title>
        <Card.Text>
          $ 32.990.-
        </Card.Text>
        <Button variant="dark">Agregar al Carro</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={vigno} />
      <Card.Body>
        <Card.Title>Vigno</Card.Title>
        <Card.Text>
          $ 7.990.-
        </Card.Text>
        <Button variant="dark">Agregar al Carro</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={espumante} />
      <Card.Body>
        <Card.Title>Dante Espumante</Card.Title>
        <Card.Text>
          $ 5.990.-
        </Card.Text>
        <Button variant="dark">Agregar al Carro</Button>
      </Card.Body>
    </Card>
    </div>
    </>

    
  )
}

export default ContenedorProducto