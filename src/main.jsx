import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext";

import { Provider } from "react-redux";
import { store } from "./components/redux/Slices/Store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StoreContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </StoreContextProvider>
  </BrowserRouter>
);
