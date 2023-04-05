import { useContext, useState, createContext } from "react";

const StoreContext = createContext();

function StoreContextProvider({ children }) {
  const [selectedColor4, setSelectedColor4] = useState();
  const [selectedColor5, setSelectedColor5] = useState();
  const [selectedColor, setSelectedColor] = useState();
  const [selectedColor1, setSelectedColor1] = useState();

  return (
    <StoreContext.Provider
      value={{
        selectedColor,
        setSelectedColor,
        selectedColor1,
        setSelectedColor1,
        selectedColor5,
        setSelectedColor5,
        selectedColor4,
        setSelectedColor4,
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
