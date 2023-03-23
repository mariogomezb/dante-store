import {Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import IniciaSesion from "./pages/IniciaSesion"
import Carro from "./pages/Carro"
import DetalleProducto from "./pages/DetalleProducto"
import NotFound from "./pages/NotFound"
import Catalogo from "./pages/Catalogo"
import Favoritos from "./pages/Favoritos"
import Registro from "./pages/Registro"
import AuthUser from "./context/AuthUser"

function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/inicia" element={<IniciaSesion/>}/>
        <Route path="/registro" element={<Registro/>}/>
        <Route path="/catalogo" element={<Catalogo/>}/>
        <Route path="/catalogo/:id" element={<DetalleProducto/>}/>
        <Route path="/carro" element={
          <AuthUser>
            <Carro/>
          </AuthUser>}/>
        <Route path="/favoritos" element={
        <AuthUser>
          <Favoritos/>
        </AuthUser>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
