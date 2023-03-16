import { Link } from 'react-router-dom'
import { useCarroContext } from '../context/CarroContext';
import Card from 'react-bootstrap/Card';

export default function CardProducto({item}){
  const {addItem} = useCarroContext();
  return (
    <div className='mb-2 col-12 col-md-6 col-xl-3 g-4'>
      <Card style={{ width: '16rem' }}>
        <Card.Img variant="top" src={item.img} />
        <Card.Body className="text-center">
          <Card.Title><b>{item.name}</b></Card.Title>
          <Card.Text>
            <b>Precio: ${item.price}</b>
          </Card.Text>
          <div className="d-flex gap-2 card-buttons">
            <Link
              to="/carro"
              className="btn btn-dark"
              onClick={() => addItem(item)}
            >
              Comprar
            </Link>
            <Link
              to={`/catalogo/${item.id}`}
              className="btn btn-dark"
            >
              Ver Detalles
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}