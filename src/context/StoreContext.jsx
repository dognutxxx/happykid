import { useContext, useState, createContext } from "react";
import { productsItem } from "../data";

const StoreContext = createContext();

function StoreContextProvider({ children }) {
  const [newProduct, setNewProduct] = useState(productsItem);
  const [selectedColor3, setSelectedColor3] = useState();
  const [selectedColor2, setSelectedColor2] = useState();
  const [selectedColor4, setSelectedColor4] = useState();
  const [selectedColor5, setSelectedColor5] = useState();
  const [selectedColor, setSelectedColor] = useState();
  const [selectedColor1, setSelectedColor1] = useState();

  return (
    <StoreContext.Provider
      value={{
        newProduct,
        setNewProduct,
        selectedColor,
        setSelectedColor,
        selectedColor1,
        setSelectedColor1,
        selectedColor5,
        setSelectedColor5,
        selectedColor4,
        setSelectedColor4,
        selectedColor2,
        setSelectedColor2,
        selectedColor3,
        setSelectedColor3,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

const useStore = () => {
  const ctx = useContext(StoreContext);
  return ctx;
};

export default StoreContextProvider;

export { useStore };
