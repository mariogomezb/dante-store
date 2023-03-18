import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext()

export default function FavoritosProvider({children}){

  const [favoritos, setFavoritos] = useState([])

  const adicionFavoritos = (item) => {
    setFavoritos([...favoritos, item])
  }

  const eliminarFavoritos = (id) => {
    setFavoritos(favoritos.filter((item) => item.id != id))
  }

  return (
    <FavoritosContext.Provider 
    value={{
      favoritos, 
      adicionFavoritos, 
      eliminarFavoritos
    }}>
      {children}
    </FavoritosContext.Provider>
  )
}

export const useFavoritosContext = () => useContext(FavoritosContext);