import CardProducto from "../components/CardProducto";
import { useFavoritosContext } from "../context/FavoritosContext";

import Menu from "../components/Menu";
import Footer from '../components/Footer';

export default function Favoritos() {
  const {favoritos} = useFavoritosContext();
  return (
    <div className="container justify-content-center">
      <Menu />
      <h1 className="text-center my-5">Favoritos</h1>
      <div className="row ps-5">
        {favoritos.map((item) => (
            <CardProducto key={item.id} item={item} seleccionaFavoritos />
          ))
        }
        {favoritos.length === 0 && (
          <li className="list-group-item text-center">
            <b>No tienes favoritos, selecciónalos en nuestro Catálago</b>
          </li>
        )}
      </div>
      <Footer />
    </div>
  );
}