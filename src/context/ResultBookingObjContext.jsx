import { useContext, useState, createContext } from "react";

const ResultBookingObjContext = createContext();

function ResultBookingObjContextProvider({ children }) {
  const [onewayDirectObjBooking, setOnewayDirectObjBooking] = useState("");
  // console.log("OnewayDirect", onewayDirectObjBooking);

  const [onewayOneStopObjBooking, setOnewayOneStopObjBooking] = useState("");
  // console.log("onewayOneStop", onewayOneStopObjBooking);

  const [roundDir_DirObjBookingInfo, setRoundDir_DirObjBookingInfo] =
    useState("");
  // console.log("roundDir_Dir", roundDir_DirObjBookingInfo);

  const [roundDir_OneObjBookingInfo, setRoundDir_OneObjBookingInfo] =
    useState("");
  // console.log("roundDir_One", roundDir_OneObjBookingInfo);

  const [roundOne_OneObjBookingInfo, setRoundOne_OneObjBookingInfo] =
    useState("");
  // console.log("roundOne_One", roundOne_OneObjBookingInfo);

  const [roundOne_DirObjBookingInfo, setRoundOne_DirObjBookingInfo] =
    useState("");
  // console.log("roundOne_Direct", roundOne_DirObjBookingInfo);

  return (
    <ResultBookingObjContext.Provider
      value={{
        onewayDirectObjBooking,
        setOnewayDirectObjBooking,
        onewayOneStopObjBooking,
        setOnewayOneStopObjBooking,
        roundDir_DirObjBookingInfo,
        setRoundDir_DirObjBookingInfo,
        roundDir_OneObjBookingInfo,
        setRoundDir_OneObjBookingInfo,
        roundOne_OneObjBookingInfo,
        setRoundOne_OneObjBookingInfo,
        roundOne_DirObjBookingInfo,
        setRoundOne_DirObjBookingInfo,
      }}
    >
      {children}
    </ResultBookingObjContext.Provider>
  );
}

const useResultBookingObjContext = () => {
  const ctx = useContext(ResultBookingObjContext);
  return ctx;
};

export default ResultBookingObjContextProvider;

export { useResultBookingObjContext };
