import Form from "react-bootstrap/Form"

const VinoBusqueda = ({ setSearch }) => {
  return (
    <div className="browser py-5" style={{ height: "17rem" }}>
      <div className="container">
        <Form className="d-flex flex-column align-items-start my-3">
          <Form.Label htmlFor="search" className="h3">
            Encuentra tu vino
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