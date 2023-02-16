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
import FinalTwoStopDepartureContextProvider from "./context/FinalTwoStopDepartureContext";
import FinalDirectReturnContextProvider from "./context/FinalDirectReturnContext";
import FinalOneStopReturnContextProvider from "./context/FinalOneStopReturnContext";
import FinalTwoStopReturnContextProvider from "./context/FinalTwoStopReturnContext";
import ResultBookingObjContextProvider from "./context/ResultBookingObjContext";
import PnrContextProvider from "./context/PnrContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PnrContextProvider>
      <ResultBookingObjContextProvider>
        <FinalTwoStopReturnContextProvider>
          <FinalOneStopReturnContextProvider>
            <FinalDirectReturnContextProvider>
              <FinalTwoStopDepartureContextProvider>
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
              </FinalTwoStopDepartureContextProvider>
            </FinalDirectReturnContextProvider>
          </FinalOneStopReturnContextProvider>
        </FinalTwoStopReturnContextProvider>
      </ResultBookingObjContextProvider>
    </PnrContextProvider>
  </BrowserRouter>
);
