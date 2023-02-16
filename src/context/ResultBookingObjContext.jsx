import { useContext, useState, createContext } from "react";

const ResultBookingObjContext = createContext();

function ResultBookingObjContextProvider({ children }) {
  const onewayDirectObjBookingSession = sessionStorage.onewayDirectObjBooking || "[{}]"
  const onewayOneStopObjBookingSession = sessionStorage.onewayDirectObjBooking || "[{}]"
  const onewayTwoStopObjBookingSession = sessionStorage.onewayDirectObjBooking || "[{}]"

  const roundDir_DirObjBookingInfoSession = sessionStorage.roundDir_DirObjBookingInfo || "[{}]"
  const roundDir_OneObjBookingInfoSession = sessionStorage.roundDir_OneObjBookingInfo || "[{}]"
  const roundDir_TwoObjBookingInfoSession = sessionStorage.roundDir_TwoObjBookingInfo || "[{}]"
  const roundOne_DirObjBookingInfoSession = sessionStorage.roundOne_DirObjBookingInfo || "[{}]"
  const roundOne_OneObjBookingInfoSession = sessionStorage.roundOne_OneObjBookingInfo || "[{}]"
  const roundOne_TwoObjBookingInfoSession = sessionStorage.roundOne_TwoObjBookingInfo || "[{}]"
  const roundTwo_DirObjBookingInfoSession = sessionStorage.roundTwo_DirObjBookingInfo || "[{}]"
  const roundTwo_OneObjBookingInfoSession = sessionStorage.roundTwo_OneObjBookingInfo || "[{}]"
  const roundTwo_TwoObjBookingInfoSession = sessionStorage.roundTwo_TwoObjBookingInfo || "[{}]"

  const [onewayDirectObjBooking, setOnewayDirectObjBooking] = useState(JSON.parse(onewayDirectObjBookingSession));
  console.log("OnewayDirect", onewayDirectObjBooking);

  const [onewayOneStopObjBooking, setOnewayOneStopObjBooking] = useState(JSON.parse(onewayOneStopObjBookingSession));
  console.log("onewayOneStop", onewayOneStopObjBooking);

  const [onewayTwoStopObjBooking, setOnewayTwoStopObjBooking] = useState(JSON.parse(onewayTwoStopObjBookingSession));
  console.log("onewayTwoStopObjBooking", onewayTwoStopObjBooking);

  const [roundDir_DirObjBookingInfo, setRoundDir_DirObjBookingInfo] = useState(JSON.parse(roundDir_DirObjBookingInfoSession));
  console.log("roundDir_Dir", roundDir_DirObjBookingInfo);

  const [roundDir_OneObjBookingInfo, setRoundDir_OneObjBookingInfo] = useState(JSON.parse(roundDir_OneObjBookingInfoSession));
  // console.log("roundDir_One", roundDir_OneObjBookingInfo);

  const [roundDir_TwoObjBookingInfo, setRoundDir_TwoObjBookingInfo] = useState(JSON.parse(roundDir_TwoObjBookingInfoSession));
  // console.log("roundDir_Two", roundDir_TwoObjBookingInfo);

  const [roundOne_DirObjBookingInfo, setRoundOne_DirObjBookingInfo] = useState(JSON.parse(roundOne_DirObjBookingInfoSession));
  // console.log("roundOne_Direct", roundOne_DirObjBookingInfo);

  const [roundOne_OneObjBookingInfo, setRoundOne_OneObjBookingInfo] = useState(JSON.parse(roundOne_OneObjBookingInfoSession));
  // console.log("roundOne_One", roundOne_OneObjBookingInfo);

  const [roundOne_TwoObjBookingInfo, setRoundOne_TwoObjBookingInfo] = useState(JSON.parse(roundOne_TwoObjBookingInfoSession));
  // console.log("roundOne_Two", roundOne_TwoObjBookingInfo);

  const [roundTwo_DirObjBookingInfo, setRoundTwo_DirObjBookingInfo] = useState(JSON.parse(roundTwo_DirObjBookingInfoSession));
  // console.log("roundTwo_One11111", roundTwo_DirObjBookingInfo);

  const [roundTwo_OneObjBookingInfo, setRoundTwo_OneObjBookingInfo] = useState(JSON.parse(roundTwo_OneObjBookingInfoSession));
  // console.log("roundTwo_One", roundOne_TwoObjBookingInfo);

  const [roundTwo_TwoObjBookingInfo, setRoundTwo_TwoObjBookingInfo] = useState(JSON.parse(roundTwo_TwoObjBookingInfoSession));
  // console.log("roundTwo_One", roundOne_TwoObjBookingInfo);

  return (
    <ResultBookingObjContext.Provider
      value={{
        onewayDirectObjBooking,
        setOnewayDirectObjBooking,
        onewayOneStopObjBooking,
        setOnewayOneStopObjBooking,
        onewayTwoStopObjBooking,
        setOnewayTwoStopObjBooking,
        roundDir_DirObjBookingInfo,
        setRoundDir_DirObjBookingInfo,
        roundDir_OneObjBookingInfo,
        setRoundDir_OneObjBookingInfo,
        roundDir_TwoObjBookingInfo,
        setRoundDir_TwoObjBookingInfo,
        roundOne_DirObjBookingInfo,
        setRoundOne_DirObjBookingInfo,
        roundOne_OneObjBookingInfo,
        setRoundOne_OneObjBookingInfo,
        roundOne_TwoObjBookingInfo,
        setRoundOne_TwoObjBookingInfo,
        roundTwo_DirObjBookingInfo,
        setRoundTwo_DirObjBookingInfo,
        roundTwo_OneObjBookingInfo,
        setRoundTwo_OneObjBookingInfo,
        roundTwo_TwoObjBookingInfo,
        setRoundTwo_TwoObjBookingInfo,
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
