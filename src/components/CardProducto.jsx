import { Link } from 'react-router-dom'
import { useCarroContext } from '../context/CarroContext';
import { useFavoritosContext} from '../context/FavoritosContext';

import Card from 'react-bootstrap/Card';
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

export default function CardProducto({item, seleccionaFavoritos}){
  const {addItem} = useCarroContext();
  const { favoritos, adicionFavoritos, eliminarFavoritos } = useFavoritosContext();

  return (
    <div className='mb-2 col-12 col-md-6 col-xl-3 g-4'>
      <Card style={{ width: '16rem' }}>
        <Card.Img variant="top" src={item.img} />
        <Card.Body className="text-center">
          <Card.Title><b>{item.name}</b></Card.Title>
          <Card.Text>
            <b>Precio: ${item.price}</b>
          </Card.Text>
          <div className="d-flex gap-2 card-buttons mb-2">
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
          {seleccionaFavoritos ? (
          <Button
            size="small"
            onClick={() => {
              eliminarFavoritos(item.id);
            }}
            variant="contained"
            color="error"
            startIcon={<DeleteIcon />}
          >
            Eliminar
          </Button>
        ) : (
          <Button
            disabled={favoritos.some((i) => i.id == item.id)}
            onClick={() => {
              adicionFavoritos(item);
            }}
            size="small"
            variant="contained"
            color="primary"
            sx={{ padding: 0.5 }}
            endIcon={<SendIcon />}
          >
            Agregar a Favoritos
          </Button>
        )}
        </Card.Body>
      </Card>
    </div>
  )
}