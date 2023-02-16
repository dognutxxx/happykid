import { useContext, useState, createContext } from 'react';

const FinalOneStopDepartureContext = createContext();

function FinalOneStopDepartureContextProvider({ children }) {

  //new
  const [depOneStopDepCityCode_s1, setDepOneStopDepCityCode_s1] = useState();
  const [depOneStopDepCityCode_s2, setDepOneStopDepCityCode_s2] = useState();
  const [depOneStopDepCityName_s1, setDepOneStopDepCityName_s1] = useState();
  const [depOneStopDepCityName_s2, setDepOneStopDepCityName_s2] = useState();
  const [depOneStopArrCityCode_s1, setDepOneStopArrCityCode_s1] = useState();
  const [depOneStopArrCityCode_s2, setDepOneStopArrCityCode_s2] = useState();
  const [depOneStopArrCityName_s1, setDepOneStopArrCityName_s1] = useState();
  const [depOneStopArrCityName_s2, setDepOneStopArrCityName_s2] = useState();
  const [depOneStopAirlineCode_s1, setDepOneStopAirlineCode_s1] = useState();
  const [depOneStopAirlineCode_s2, setDepOneStopAirlineCode_s2] = useState();
  const [depOneStopAirlineName_s1, setDepOneStopAirlineName_s1] = useState();
  const [depOneStopAirlineName_s2, setDepOneStopAirlineName_s2] = useState();
  const [depOneStopFlightNumber_s1, setDepOneStopFlightNumber_s1] = useState();
  const [depOneStopFlightNumber_s2, setDepOneStopFlightNumber_s2] = useState();
  const [depOneStopOperatedAirlineCode_s1, setDepOneStopOperatedAirlineCode_s1] = useState();
  const [depOneStopOperatedAirlineCode_s2, setDepOneStopOperatedAirlineCode_s2] = useState();
  const [depOneStopOperatedAirlineName_s1, setDepOneStopOperatedAirlineName_s1] = useState();
  const [depOneStopOperatedAirlineName_s2, setDepOneStopOperatedAirlineName_s2] = useState();
  const [depOneStopDepartureDateTime_s1, setDepOneStopDepartureDateTime_s1] = useState();
  const [depOneStopDepartureDateTime_s2, setDepOneStopDepartureDateTime_s2] = useState();
  const [depOneStoparriveDateTime_s1, setDepOneStoparriveDateTime_s1] = useState();
  const [depOneStoparriveDateTime_s2, setDepOneStoparriveDateTime_s2] = useState();
  const [depOneStopRBD_s1, setDepOneStopRBD_s1] = useState();
  const [depOneStopRBD_s2, setDepOneStopRBD_s2] = useState();
  const [depOneStopSeq_s1, setDepOneStopSeq_s1] = useState();
  const [depOneStopSeq_s2, setDepOneStopSeq_s2] = useState();



  return (
    <FinalOneStopDepartureContext.Provider value={{
      //new
      depOneStopDepCityCode_s1, setDepOneStopDepCityCode_s1,
      depOneStopDepCityCode_s2, setDepOneStopDepCityCode_s2,
      depOneStopDepCityName_s1, setDepOneStopDepCityName_s1,
      depOneStopDepCityName_s2, setDepOneStopDepCityName_s2,
      depOneStopArrCityCode_s1, setDepOneStopArrCityCode_s1,
      depOneStopArrCityCode_s2, setDepOneStopArrCityCode_s2,
      depOneStopArrCityName_s1, setDepOneStopArrCityName_s1,
      depOneStopArrCityName_s2, setDepOneStopArrCityName_s2,
      depOneStopAirlineCode_s1, setDepOneStopAirlineCode_s1,
      depOneStopAirlineCode_s2, setDepOneStopAirlineCode_s2,
      depOneStopAirlineName_s1, setDepOneStopAirlineName_s1,
      depOneStopAirlineName_s2, setDepOneStopAirlineName_s2,
      depOneStopFlightNumber_s1, setDepOneStopFlightNumber_s1,
      depOneStopFlightNumber_s2, setDepOneStopFlightNumber_s2,
      depOneStopOperatedAirlineCode_s1, setDepOneStopOperatedAirlineCode_s1,
      depOneStopOperatedAirlineCode_s2, setDepOneStopOperatedAirlineCode_s2,
      depOneStopOperatedAirlineName_s1, setDepOneStopOperatedAirlineName_s1,
      depOneStopOperatedAirlineName_s2, setDepOneStopOperatedAirlineName_s2,
      depOneStopDepartureDateTime_s1, setDepOneStopDepartureDateTime_s1,
      depOneStopDepartureDateTime_s2, setDepOneStopDepartureDateTime_s2,
      depOneStoparriveDateTime_s1, setDepOneStoparriveDateTime_s1,
      depOneStoparriveDateTime_s2, setDepOneStoparriveDateTime_s2,
      depOneStopRBD_s1, setDepOneStopRBD_s1,
      depOneStopRBD_s2, setDepOneStopRBD_s2,
      depOneStopSeq_s1, setDepOneStopSeq_s1,
      depOneStopSeq_s2, setDepOneStopSeq_s2
    }}>
      {children}
    </FinalOneStopDepartureContext.Provider>

  )
}

const useFinalOneStopDepartureContext = () => {
  const ctx = useContext(FinalOneStopDepartureContext);
  return ctx
}

export default FinalOneStopDepartureContextProvider;

export { useFinalOneStopDepartureContext };