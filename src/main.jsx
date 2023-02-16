import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import BookingContextProvider from "./context/BookingContext";
import DepartureSelectedContextProvider from "./context/DepartureSelectedContext";
import ReturnSelectedContextProvider from "./context/ReturnSelectedContext";
import PassengerContractInfoContextProvider from "./context/PassengerContractInfoContext";
import ContractDetailContextProvider from "./context/ContractDetailContext";
import FinalDirectDepartureContextProvider from "./context/FinalDirectDepartureContext";
import FinalOneStopDepartureContextProvider from "./context/FinalOneStopDepartureContext";
import FinalDirectReturnContextProvider from "./context/FinalDirectReturnContext";
import FinalOneStopReturnContextProvider from "./context/FinalOneStopReturnContext";
import ResultBookingObjContextProvider from "./context/ResultBookingObjContext";
import PnrContextProvider from "./context/PnrContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PnrContextProvider>
      <ResultBookingObjContextProvider>
        <FinalOneStopReturnContextProvider>
          <FinalDirectReturnContextProvider>
            <FinalOneStopDepartureContextProvider>
              <FinalDirectDepartureContextProvider>
                <ContractDetailContextProvider>
                  <PassengerContractInfoContextProvider>
                    <ReturnSelectedContextProvider>
                      <DepartureSelectedContextProvider>
                        <BookingContextProvider>
                          <App />
                        </BookingContextProvider>
                      </DepartureSelectedContextProvider>
                    </ReturnSelectedContextProvider>
                  </PassengerContractInfoContextProvider>
                </ContractDetailContextProvider>
              </FinalDirectDepartureContextProvider>
            </FinalOneStopDepartureContextProvider>
          </FinalDirectReturnContextProvider>
        </FinalOneStopReturnContextProvider>
      </ResultBookingObjContextProvider>
    </PnrContextProvider>
  </BrowserRouter>
);
