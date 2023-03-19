import Form from "react-bootstrap/Form"

const VinoBusqueda = ({ setSearch }) => {
  return (
    <div className="browser py-3" style={{ height: "10rem" }}>
      <div className="container">
        <Form className="d-flex flex-column align-items-center my-3">
          <Form.Label htmlFor="search" className="h3">
            Encuentra tu producto
          </Form.Label>
          <input
            type="text"
            name="search"
            placeholder="Ingresa el nombre"
            className="p-1"
            onChange={(e) => setSearch(e.target.value)}
          />
        </Form>
      </div>
    </div>
  );
};

export default VinoBusqueda;