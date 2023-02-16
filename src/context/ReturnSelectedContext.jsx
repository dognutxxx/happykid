import { useContext, useState, createContext } from "react";

const ReturnSelectedContext = createContext();

function ReturnSelectedContextProvider({ children }) {
  const [airline2, setAirline2] = useState();
  const [timeDuration2, setTimeDuration2] = useState();
  const [departureNameCity2, setDepartureNameCity2] = useState();
  const [arriveNameCity2, setArriveNameCity2] = useState();
  const [departureCodeCity2, setDepartureCodeCity2] = useState();
  const [arriveCodeCity2, setArriveCodeCity2] = useState();
  const [departureDateTime2, setDepartureDateTime2] = useState();
  const [arriveDateTime2, setArriveDateTime2] = useState();
  const [src2, setSRC2] = useState();
  const [oneStopCity2, setOneStopCity2] = useState();
  const [oneStopCodeCity2, setOneStopCodeCity2] = useState();
  const [isSelected2, setIsSelected2] = useState(false);
  const [departureDateTimeSeq1_2, setDepartureDateTimeSeq1_2] = useState();
  const [departureDateTimeSeq2_2, setDepartureDateTimeSeq2_2] = useState();

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
        isSelected2,
        setIsSelected2,
        oneStopCodeCity2,
        setOneStopCodeCity2,
        departureDateTimeSeq1_2,
        setDepartureDateTimeSeq1_2,
        departureDateTimeSeq2_2,
        setDepartureDateTimeSeq2_2,
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
