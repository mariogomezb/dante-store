import { createContext, useContext, useState } from "react";

export const CarroContext = createContext();

export default function CarroProvider({ children }) {
  const [carro, setCarro] = useState([]);
  const [userName,setUsername] = useState("")

  const addItem = (item) => {
    const itemExists = carro.find((i) => i.id === item.id);
    if (itemExists) {
      setCarro(
        carro.map((i) => (i.id === item.id ? { ...i, count: i.count + 1 } : i))
      );
    } else {
      setCarro([...carro, { ...item, count: 1 }]);
    }
  };

  const removeItem = (item) => {
    const itemExists = carro.find((i) => i.id === item.id);
    if (itemExists.count === 1) {
      setCarro(carro.filter((i) => i.id !== item.id));
    } else {
      setCarro(
        carro.map((i) => (i.id === item.id ? { ...i, count: i.count - 1 } : i))
      );
    }
  };

  const totalCarro = () => {
    return carro.reduce((acc, item) => acc + item.price * item.count, 0);
  };

  const findItemCount = (id) => {
    const item = carro.find((i) => i.id === id);
    return item ? item.count : 0;
  };

  return (
    <CarroContext.Provider
      value={{userName,
        carro,
        addItem,
        removeItem,
        totalCarro,
        findItemCount,
      }}
    >
      {children}
    </CarroContext.Provider>
  );
}

export const useCarroContext = () => useContext(CarroContext);