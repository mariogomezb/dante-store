import { useEffect, useState } from "react";
import { useCarroContext } from "../context/CarroContext";
import { useParams, Link } from "react-router-dom";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

export default function DetalleProducto(){
  const [vinos, setVinos] = useState();
  const [loading, setLoading] = useState(true);
  const {addItem} = useCarroContext();
  const params = useParams();

  useEffect(() => {
    setLoading(true);
    fetch("/vinos.json")
      .then((response) => response.json())
      .then((data) => {
        const vinos = data.find((item) => item.id === params.id);
        setVinos(vinos);
      })
      .finally(() => setLoading(false));
  }, [params]);

  if (loading){
    return <h1>Cargando...</h1>
  }

  return (
    <div className="card mb-3 mt-5">
    <Menu/>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={vinos.img} className="img-fluid rounded-start h-100" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="fs-1">{vinos.name}</h5>
            <p className="card-text">{vinos.desc}</p>
            <div className="d-flex gap-2 card-buttons">
              <Link className="btn btn-dark" onClick={() => addItem(vinos)} to="/carro">Comprar</Link>
              <Link className="btn btn-dark" to="/catalogo">Volver a Catálogo</Link>
            </div>  
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}