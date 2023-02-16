import { useContext, useState, createContext } from "react";

const ReturnSelectedContext = createContext();

function ReturnSelectedContextProvider({ children }) {
  const [airline2, setAirline2] = useState(sessionStorage.airline2);
  const [timeDuration2, setTimeDuration2] = useState(sessionStorage.timeDuration2);
  const [departureNameCity2, setDepartureNameCity2] = useState(sessionStorage.departureNameCity2);
  const [arriveNameCity2, setArriveNameCity2] = useState(sessionStorage.arriveNameCity2);
  const [departureCodeCity2, setDepartureCodeCity2] = useState(sessionStorage.departureCodeCity2);
  const [arriveCodeCity2, setArriveCodeCity2] = useState(sessionStorage.arriveCodeCity2);
  const [departureDateTime2, setDepartureDateTime2] = useState(sessionStorage.departureDateTime2);
  const [arriveDateTime2, setArriveDateTime2] = useState(sessionStorage.arriveDateTime2);
  const [src2, setSRC2] = useState(sessionStorage.src2);
  const [oneStopCity2, setOneStopCity2] = useState();
  const [twoStopCity2, setTwoStopCity2] = useState();
  const [oneStopCodeCity2, setOneStopCodeCity2] = useState();
  const [twoStopCodeCity2, setTwoStopCodeCity2] = useState();
  const [isSelected2, setIsSelected2] = useState(false);
  const [departureDateTimeSeq1_2, setDepartureDateTimeSeq1_2] = useState();
  const [departureDateTimeSeq2_2, setDepartureDateTimeSeq2_2] = useState();
  const [departureDateTimeSeq3_2, setDepartureDateTimeSeq3_2] = useState();
  const [arrivalDateTimeSeq1_2, setArrivalDateTimeSeq1_2] = useState();
  const [arrivalDateTimeSeq2_2, setArrivalDateTimeSeq2_2] = useState();
  const [arrivalDateTimeSeq3_2, setArrivalDateTimeSeq3_2] = useState();

  // console.log("airline",airline2);
  // console.log("timeDuration2",timeDuration2);
  // console.log("departureNameCity2",departureNameCity2);
  // console.log("arriveNameCity2",arriveNameCity2);
  // console.log("departureCodeCity2",departureCodeCity2);
  // console.log("arriveCodeCity2",arriveCodeCity2);
  // console.log("departureDateTime2",departureDateTime2);
  // console.log("arriveDateTime2",arriveDateTime2);
  // console.log("departureDateTime2",departureDateTime2);
  // console.log("arriveDateTime2",arriveDateTime2);
  // console.log("src2",src2);
  // console.log("oneStopCity2",oneStopCity2);
  // console.log("twoStopCity2",twoStopCity2);
  // console.log("oneStopCodeCity2",oneStopCodeCity2);
  // console.log("twoStopCodeCity2",twoStopCodeCity2);
  // console.log("isSelected2",isSelected2);
  // console.log("departureDateTimeSeq1_2",departureDateTimeSeq1_2);
  // console.log("departureDateTimeSeq2_2",departureDateTimeSeq2_2);
  // console.log("departureDateTimeSeq3_2",departureDateTimeSeq3_2);
  // console.log("arrivalDateTimeSeq1_2",arrivalDateTimeSeq1_2);
  // console.log("arrivalDateTimeSeq2_2",arrivalDateTimeSeq2_2);
  // console.log("arrivalDateTimeSeq3_2",arrivalDateTimeSeq3_2);
  

  return (
    <ReturnSelectedContext.Provider
      value={{
        airline2,
        setAirline2,
        timeDuration2,
        setTimeDuration2,
        departureNameCity2,
        setDepartureNameCity2,
        arriveNameCity2,
        setArriveNameCity2,
        departureCodeCity2,
        setDepartureCodeCity2,
        arriveCodeCity2,
        setArriveCodeCity2,
        departureDateTime2,
        setDepartureDateTime2,
        arriveDateTime2,
        setArriveDateTime2,
        src2,
        setSRC2,
        oneStopCity2,
        setOneStopCity2,
        twoStopCity2,
        setTwoStopCity2,
        isSelected2,
        setIsSelected2,
        oneStopCodeCity2,
        setOneStopCodeCity2,
        departureDateTimeSeq1_2,
        setDepartureDateTimeSeq1_2,
        departureDateTimeSeq2_2,
        setDepartureDateTimeSeq2_2,
        twoStopCodeCity2,
        setTwoStopCodeCity2,
        departureDateTimeSeq3_2,
        setDepartureDateTimeSeq3_2,
        arrivalDateTimeSeq1_2,
        setArrivalDateTimeSeq1_2,
        arrivalDateTimeSeq2_2,
        setArrivalDateTimeSeq2_2,
        arrivalDateTimeSeq3_2,
        setArrivalDateTimeSeq3_2,
      }}
    >
      {children}
    </ReturnSelectedContext.Provider>
  );
}

const useReturnSelectedContext = () => {
  const ctx = useContext(ReturnSelectedContext);
  return ctx;
};

export default ReturnSelectedContextProvider;

export { useReturnSelectedContext };
