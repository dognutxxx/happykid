import { useContext, useState, createContext } from 'react';

const FinalOneStopReturnContext = createContext();

function FinalOneStopReturnContextProvider({ children }) {

  //new
  const [returnOneStopDepCityCode_s1, setReturnOneStopDepCityCode_s1] = useState();
  const [returnOneStopDepCityCode_s2, setReturnOneStopDepCityCode_s2] = useState();
  const [returnOneStopDepCityName_s1, setReturnOneStopDepCityName_s1] = useState();
  const [returnOneStopDepCityName_s2, setReturnOneStopDepCityName_s2] = useState();
  const [returnOneStopArrCityCode_s1, setReturnOneStopArrCityCode_s1] = useState();
  const [returnOneStopArrCityCode_s2, setReturnOneStopArrCityCode_s2] = useState();
  const [returnOneStopArrCityName_s1, setReturnOneStopArrCityName_s1] = useState();
  const [returnOneStopArrCityName_s2, setReturnOneStopArrCityName_s2] = useState();
  const [returnOneStopAirlineCode_s1, setReturnOneStopAirlineCode_s1] = useState();
  const [returnOneStopAirlineCode_s2, setReturnOneStopAirlineCode_s2] = useState();
  const [returnOneStopAirlineName_s1, setReturnOneStopAirlineName_s1] = useState();
  const [returnOneStopAirlineName_s2, setReturnOneStopAirlineName_s2] = useState();
  const [returnOneStopFlightNumber_s1, setReturnOneStopFlightNumber_s1] = useState();
  const [returnOneStopFlightNumber_s2, setReturnOneStopFlightNumber_s2] = useState();
  const [returnOneStopOperatedAirlineCode_s1, setReturnOneStopOperatedAirlineCode_s1] = useState();
  const [returnOneStopOperatedAirlineCode_s2, setReturnOneStopOperatedAirlineCode_s2] = useState();
  const [returnOneStopOperatedAirlineName_s1, setReturnOneStopOperatedAirlineName_s1] = useState();
  const [returnOneStopOperatedAirlineName_s2, setReturnOneStopOperatedAirlineName_s2] = useState();
  const [returnOneStopDepartureDateTime_s1, setReturnOneStopDepartureDateTime_s1] = useState();
  const [returnOneStopDepartureDateTime_s2, setReturnOneStopDepartureDateTime_s2] = useState();
  const [returnOneStoparriveDateTime_s1, setReturnOneStoparriveDateTime_s1] = useState();
  const [returnOneStoparriveDateTime_s2, setReturnOneStoparriveDateTime_s2] = useState();
  const [returnOneStopRBD_s1, setReturnOneStopRBD_s1] = useState();
  const [returnOneStopRBD_s2, setReturnOneStopRBD_s2] = useState();
  const [returnOneStopSeq_s1, setReturnOneStopSeq_s1] = useState();
  const [returnOneStopSeq_s2, setReturnOneStopSeq_s2] = useState();

  return (
    <FinalOneStopReturnContext.Provider value={{

      //new
      returnOneStopDepCityCode_s1, setReturnOneStopDepCityCode_s1,
      returnOneStopDepCityCode_s2, setReturnOneStopDepCityCode_s2,
      returnOneStopDepCityName_s1, setReturnOneStopDepCityName_s1,
      returnOneStopDepCityName_s2, setReturnOneStopDepCityName_s2,
      returnOneStopArrCityCode_s1, setReturnOneStopArrCityCode_s1,
      returnOneStopArrCityCode_s2, setReturnOneStopArrCityCode_s2,
      returnOneStopArrCityName_s1, setReturnOneStopArrCityName_s1,
      returnOneStopArrCityName_s2, setReturnOneStopArrCityName_s2,
      returnOneStopAirlineCode_s1, setReturnOneStopAirlineCode_s1,
      returnOneStopAirlineCode_s2, setReturnOneStopAirlineCode_s2,
      returnOneStopAirlineName_s1, setReturnOneStopAirlineName_s1,
      returnOneStopAirlineName_s2, setReturnOneStopAirlineName_s2,
      returnOneStopFlightNumber_s1, setReturnOneStopFlightNumber_s1,
      returnOneStopFlightNumber_s2, setReturnOneStopFlightNumber_s2,
      returnOneStopOperatedAirlineCode_s1, setReturnOneStopOperatedAirlineCode_s1,
      returnOneStopOperatedAirlineCode_s2, setReturnOneStopOperatedAirlineCode_s2,
      returnOneStopOperatedAirlineName_s1, setReturnOneStopOperatedAirlineName_s1,
      returnOneStopOperatedAirlineName_s2, setReturnOneStopOperatedAirlineName_s2,
      returnOneStopDepartureDateTime_s1, setReturnOneStopDepartureDateTime_s1,
      returnOneStopDepartureDateTime_s2, setReturnOneStopDepartureDateTime_s2,
      returnOneStoparriveDateTime_s1, setReturnOneStoparriveDateTime_s1,
      returnOneStoparriveDateTime_s2, setReturnOneStoparriveDateTime_s2,
      returnOneStopRBD_s1, setReturnOneStopRBD_s1,
      returnOneStopRBD_s2, setReturnOneStopRBD_s2,
      returnOneStopSeq_s1, setReturnOneStopSeq_s1,
      returnOneStopSeq_s2, setReturnOneStopSeq_s2
    }}>
      {children}
    </FinalOneStopReturnContext.Provider>

  )
}

const useFinalOneStopReturnContext = () => {
  const ctx = useContext(FinalOneStopReturnContext);
  return ctx
}

export default FinalOneStopReturnContextProvider;

export { useFinalOneStopReturnContext }; 