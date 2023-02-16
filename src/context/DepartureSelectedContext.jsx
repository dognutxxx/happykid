import { useContext, useState, createContext } from "react";

const DepartureSelectedContext = createContext();

function DepartureSelectedContextProvider({ children }) {
  const [airline, setAirline] = useState(sessionStorage.airline);
  const [timeDuration, setTimeDuration] = useState(sessionStorage.timeDuration);
  const [departureNameCity, setDepartureNameCity] = useState(sessionStorage.departureNameCity);
  const [arriveNameCity, setArriveNameCity] = useState(sessionStorage.arriveNameCity);
  const [departureCodeCity, setDepartureCodeCity] = useState(sessionStorage.departureCodeCity);
  const [arriveCodeCity, setArriveCodeCity] = useState(sessionStorage.arriveCodeCity);
  const [departureDateTime, setDepartureDateTime] = useState(sessionStorage.departureDateTime);
  const [arriveDateTime, setArriveDateTime] = useState(sessionStorage.arriveDateTime);
  const [src, setSRC] = useState(sessionStorage.src);
  const [oneStopCity, setOneStopCity] = useState();
  const [twoStopCity, setTwoStopCity] = useState();
  const [oneStopCodeCity, setOneStopCodeCity] = useState();
  const [twoStopCodeCity, setTwoStopCodeCity] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [departureDateTimeSeq1_1, setDepartureDateTimeSeq1_1] = useState();
  const [departureDateTimeSeq2_1, setDepartureDateTimeSeq2_1] = useState();
  const [departureDateTimeSeq3_1, setDepartureDateTimeSeq3_1] = useState();
  const [arrivalDateTimeSeq1_1, setArrivalDateTimeSeq1_1] = useState();
  const [arrivalDateTimeSeq2_1, setArrivalDateTimeSeq2_1] = useState();
  const [arrivalDateTimeSeq3_1, setArrivalDateTimeSeq3_1] = useState();
  const [flightNumber, setFlightNumber] = useState();

  return (
    <DepartureSelectedContext.Provider
      value={{
        airline,
        setAirline,
        timeDuration,
        setTimeDuration,
        departureNameCity,
        setDepartureNameCity,
        arriveNameCity,
        setArriveNameCity,
        departureCodeCity,
        setDepartureCodeCity,
        arriveCodeCity,
        setArriveCodeCity,
        departureDateTime,
        setDepartureDateTime,
        arriveDateTime,
        setArriveDateTime,
        src,
        setSRC,
        oneStopCity,
        setOneStopCity,
        twoStopCity,
        setTwoStopCity,
        isSelected,
        setIsSelected,
        oneStopCodeCity,
        setOneStopCodeCity,
        departureDateTimeSeq1_1,
        setDepartureDateTimeSeq1_1,
        departureDateTimeSeq2_1,
        setDepartureDateTimeSeq2_1,
        twoStopCodeCity,
        setTwoStopCodeCity,
        departureDateTimeSeq3_1,
        setDepartureDateTimeSeq3_1,
        arrivalDateTimeSeq1_1,
        setArrivalDateTimeSeq1_1,
        arrivalDateTimeSeq2_1,
        setArrivalDateTimeSeq2_1,
        arrivalDateTimeSeq3_1,
        setArrivalDateTimeSeq3_1,
        flightNumber,
        setFlightNumber,
      }}
    >
      {children}
    </DepartureSelectedContext.Provider>
  );
}

const useDepartureSelectedContext = () => {
  const ctx = useContext(DepartureSelectedContext);
  return ctx;
};

export default DepartureSelectedContextProvider;

export { useDepartureSelectedContext };
