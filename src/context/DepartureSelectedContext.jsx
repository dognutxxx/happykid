import { useContext, useState, createContext } from 'react';

const DepartureSelectedContext = createContext();

function DepartureSelectedContextProvider({children}) {
    const [airline, setAirline] = useState();
    const [timeDuration, setTimeDuration] = useState();
    const [departureNameCity, setDepartureNameCity] = useState();
    const [arriveNameCity, setArriveNameCity] = useState();
    const [departureCodeCity, setDepartureCodeCity] = useState();
    const [arriveCodeCity, setArriveCodeCity] = useState();
    const [departureDateTime, setDepartureDateTime] = useState();
    const [arriveDateTime, setArriveDateTime] = useState();
    const [src, setSRC] = useState();
    const [oneStopCity, setOneStopCity] = useState();
    const [isSelected, setIsSelected] = useState(false);
    const [departureDateTimeSeq1, setDepartureDateTimeSeq1] = useState();
    const [departureDateTimeSeq2, setDepartureDateTimeSeq2] = useState();
    const [arriveCodeCitySeq1, setArriveCodeCitySeq1] = useState();
    const [flightNumber, setFlightNumber] = useState();
    const [operatedAirlineName, setOperatedAirlineName] = useState();
    const [operatedAirlineCode, setOperatedAirlineCode] = useState();
    const [seqOneFlight, setSeqOneFlight] = useState();

  return (
    <DepartureSelectedContext.Provider value={{airline,setAirline, 
    timeDuration, setTimeDuration, 
    departureNameCity, setDepartureNameCity, 
    arriveNameCity, setArriveNameCity, 
    departureCodeCity, setDepartureCodeCity, 
    arriveCodeCity, setArriveCodeCity, 
    departureDateTime, setDepartureDateTime, 
    arriveDateTime, setArriveDateTime, 
    src, setSRC, 
    oneStopCity, 
    setOneStopCity,
    isSelected, 
    setIsSelected,
    departureDateTimeSeq1, 
    setDepartureDateTimeSeq1,
    departureDateTimeSeq2, 
    setDepartureDateTimeSeq2,
    arriveCodeCitySeq1, 
    setArriveCodeCitySeq1,
    flightNumber,
    setFlightNumber,
    operatedAirlineName,
    setOperatedAirlineName,
    operatedAirlineCode,
    setOperatedAirlineCode,
    seqOneFlight, 
    setSeqOneFlight
    }}>
        {children}
    </DepartureSelectedContext.Provider>
    
  )
}

    const useDepartureSelectedContext = () => {
        const ctx = useContext(DepartureSelectedContext);
        return ctx
    }

export default DepartureSelectedContextProvider;

export {useDepartureSelectedContext};